import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI';

const VideoCard = ({ displayData,setdeleteVideoResponseFromcard,insideCategory }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const { caption, youtubeLink } = displayData
    const sysDateTime = new Date()
    const timeStamp = sysDateTime.toLocaleString('en-IN', { timeZoneName: 'short' });
    console.log(sysDateTime);
    const historyDetails = { caption, youtubeLink, timeStamp }
    try {
      const result = await saveHistoryAPI(historyDetails)
    } catch (err) {
      console.log(err);
    }
  }

  const deleteVideo = async(id)=>{
    try{
      const result = await removeVideoAPI(id);
      setdeleteVideoResponseFromcard(result)
    }
    catch(err){
      console.log(err);
    }

  }

  const VideoCardDragStarted = (e,dragVideoDetails)=>
  {
    console.log("vidCard dragstart vidid:"+ dragVideoDetails?.id);
    // shearing data using event drag 
    e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
    
  }

  return (
    <>
      <Card draggable={true} onDragStart={e=>VideoCardDragStarted(e,displayData)} style={{ width: '12rem', marginBottom: "25px" }}>
        <Card.Img onClick={handleShow} style={{ height: '120px' }} variant="top" src={displayData?.imgUrl} />
        <Card.Body>
          <Card.Text className='d-flex justify-content-between'>
            <p>{displayData?.caption}</p>
            {
              !insideCategory && 
               <button onClick={()=>deleteVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
 
            }
          </Card.Text>
        </Card.Body>
      </Card>

      {/* modal for vid  */}
      <Modal
        show={show}
        onHide={handleClose}
        size='lg'
        centered

      >
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="480" src={`${displayData?.youtubeLink}?autoplay=1`} title="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default VideoCard