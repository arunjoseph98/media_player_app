import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { saveVideoAPI } from '../services/allAPI';
const Add = ({setAddResponseFromHome}) => {
  const [videoDetails,setVideoDetails] = useState({
    caption : '', imgUrl:'', youtubeLink:''
  })
  const [invalidLink,setInvalidLink] = useState(false)
  console.log(videoDetails);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractEmbedLinkFromURL = (useInputYoutubeLink) =>{
    if(useInputYoutubeLink.includes("https://www.youtube.com/watch?v="))
    {
      console.log(useInputYoutubeLink.split("v=")[1].slice(0,11));
      const videoId = useInputYoutubeLink.split("v=")[1].slice(0,11)
      setVideoDetails({...videoDetails,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
      setInvalidLink(false)
    }
    else
    {setInvalidLink(true)
      setVideoDetails({...videoDetails,youtubeLink:``})
    }
  }

  const handelUploadVideo =async ()=>{
    //object destructuring
    const {caption,imgUrl,youtubeLink}= videoDetails
    if(caption && imgUrl && youtubeLink){
     try{
      const result =await saveVideoAPI(videoDetails)
      console.log(result);
      if(result.status>=200 && result.status<300){
        alert("Upload successfull");
        handleClose();
        //pass the result to view component
        setAddResponseFromHome(result);
      }
     }catch(err){
      console.log(err);
      
     }
      
    }
    else{
      alert('Please fill the form!!!')
    }
  }

  return (
    <>
      <div className='d-flex align-item-center'>
          <h5>Uplode New Video</h5>
          <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>

      {/* Modal  */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uplodeing Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-2">
          <FloatingLabel controlId="floatingCaption" label="Video Caption">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
      </FloatingLabel>

      <FloatingLabel className='mt-3 mb-3' controlId="floatingUrl" label="Video Image URL">
        <Form.Control  onChange={e=>setVideoDetails({...videoDetails,imgUrl:e.target.value})} type="text" placeholder="Video Image URL" />
      </FloatingLabel>

      <FloatingLabel  controlId="floatingLink" label="Video Youtube Link">
        <Form.Control onChange={e=>extractEmbedLinkFromURL(e.target.value)} type="text" placeholder="Video Youtube Link" />
      </FloatingLabel>
      {invalidLink && 
        <div className='text-warning'>
          Invalid youtube link..
          </div>
      }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handelUploadVideo}  variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add