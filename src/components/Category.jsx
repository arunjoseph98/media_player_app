import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { saveCategoriesAPI, getAllCategoryAPI, deleteCategoryAPI, updateCategoryAPI, removeVideoAPI } from '../services/allAPI';
import VideoCard from './VideoCard';

const Category = ({ setDeleteResponseFromCategory,deleteResponseFromView }) => {
  const [allCategory, setAllCategory] = useState([])
  const [categoryName, setCategoryName] = useState('')
  const [show, setShow] = useState(false);

  useEffect(() => {
    getAllCategory()
  }, [deleteResponseFromView])
  console.log(allCategory);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSaveCategory = async () => {
    if (categoryName) {
      const categoryDetails = { categoryName, allVideo: [] }
      try {
        const result = await saveCategoriesAPI(categoryDetails)
        alert('category created')
        getAllCategory()
        handleClose()

      } catch (error) {
        console.log(error);

      }
    }
    else {
      alert('Please provide category Name.')
    }
  }

  const getAllCategory = async () => {
    try {
      const result = await getAllCategoryAPI();
      if (result.status >= 200 && result.status < 300) {
        setAllCategory(result.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const removeCategory = async (id) => {
    try {
      await deleteCategoryAPI(id);
      getAllCategory()

    } catch (error) {
      console.log(error);
    }
  }

  const dragOverCategory = (e) => {
    e.preventDefault()
  }

  const VideoCardDrop = async (e, categoryDetails) => {
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);

    categoryDetails.allVideo.push(videoDetails);

    // api call to update 
    await updateCategoryAPI(categoryDetails)
    getAllCategory()

    const result = await removeVideoAPI(videoDetails.id)
    setDeleteResponseFromCategory(result)
  }

  const categoryVideoDragStart=(e,video,categoryDetails)=>{
    let dragData = {video,categoryDetails}
    e.dataTransfer.setData("dataDrag",JSON.stringify(dragData))
    console.log(dragData);
    
  }

  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <h5>All Categories</h5>
        <button onClick={handleShow} className='btn btn-info ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>

      {/* display all Categories  */}
      <div className="container-fluid mb-3">
        {
          allCategory?.length > 0 ?
            allCategory.map(categoryDetails => (
              <div droppable='true' onDragOver={dragOverCategory} onDrop={e => VideoCardDrop(e, categoryDetails)} key={categoryDetails?.id} className="border rounded p-3 mb-3 mt-3">
                <div className="d-flex justify-content-between">
                  <h5>{categoryDetails?.categoryName}</h5>
                  <button onClick={() => removeCategory(categoryDetails?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
                </div>
                {/* display video Category  */}
                <div className="row mt-2">
                  {
                    categoryDetails?.allVideo?.length > 0 &&
                    categoryDetails?.allVideo?.map(video => 
                    (<div key={video?.id} className="col-lg-4 mb-3"
                    draggable={true} onDragStart={e=>categoryVideoDragStart(e,video,categoryDetails)} >
                      {/* video cards  */}
                      <VideoCard insideCategory={true} displayData={video}></VideoCard>
                    </div>))

                  }
                </div>
              </div>
            ))
            :
            <div className='fw-bolder text-warning'> No category</div>
        }
      </div>

      {/* modal for Categories  */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingCategoryAdd" label="Category Name">
            <Form.Control onChange={e => setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category