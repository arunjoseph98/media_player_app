import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideoAPI, saveCategoriesAPI, saveVideoAPI, updateCategoryAPI } from '../services/allAPI'
const View = ({addResponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView}) => {
  const [deleteVideoResponseFromcard,setdeleteVideoResponseFromcard]= useState("")
  const [allVideos, setAllVideo] = useState([])


  useEffect(() => {
    getAllvideo()
  }, [addResponseFromHome,deleteVideoResponseFromcard,deleteResponseFromCategory])

  console.log(`allVideos: ${allVideos}`);


  const getAllvideo = async () => {
    try {
      const result = await getAllVideoAPI()
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setAllVideo(result.data);

      }
      else {
        console.log("API call failed");

      }

    } catch (error) {
      console.log(error);

    }
  }
 
  const dragOverView = (e)=>{
    e.preventDefault()
  }

  const categoryDrop =async (e) => {
      const {video,categoryDetails} = JSON.parse(e.dataTransfer.getData("dataDrag"))
      console.log(video,categoryDetails);
      const updatedCategoryVideoList= categoryDetails?.allVideo?.filter(item=>item.id!=video.id)
      const updatedCategory = {...categoryDetails,allVideo:updatedCategoryVideoList}
      console.log(updatedCategory);
      
      //updateing category by deleting vid from category
      const result = await updateCategoryAPI(updatedCategory)
      //use state lifting to communicate data from view to category
      setDeleteResponseFromView(result)
      // use api to uplode vid 
      await saveVideoAPI(video)
      // call getAllvideos
      getAllvideo()


    }


  return (
    <>
      <Row droppable='true' onDragOver={dragOverView} onDrop={e=>categoryDrop(e)}>
        {
          allVideos?.length > 0 ?
          allVideos.map(video =>(
            <Col key={video?.id} sm={12} md={6} lg={4}>
          <VideoCard setdeleteVideoResponseFromcard={setdeleteVideoResponseFromcard} displayData={video}/>
        </Col> 
          ))
          :
          <div className='fw-bolder text-warning'>
            no video uploaded!!
          </div>
        }
      </Row>
    </>
  )
}

export default View