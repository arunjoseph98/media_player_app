import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'
import feature1 from '../assets/f1.png'
import feature2 from '../assets/f2.png'
import feature3 from '../assets/f3.png'
import { Button, Card } from 'react-bootstrap'

const Landing = () => {
  return (
    <div style={{ paddingTop: '100px' }} className='container'>

      <div className="row align-items-center ">
        <div className="col-lg-5">
          <h3 className='mt-5'>Welcome to <span className='text-warning'>MediaPlayer</span></h3>
          <p style={{ textAlign: 'justify' }}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-info mt-5'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          {/* img */}
          <img src={heroImg} className='img-fluid ' style={{ width: '450px' }} />
        </div>
      </div>
      
      <div className='my-5 align-items-center'>
        <h3 className='text-center mt-5'>Feature</h3>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Your Mix</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={feature3} />
              <Card.Body>
                <Card.Title>MixMix</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className='my-5 row align-items-center border rounded p-5'>
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple, Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tenetur minus earum, amet nostrum quibusdam corporis nesciunt dolorem recusandae.</p>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Catogoties:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tenetur minus earum, amet nostrum quibusdam corporis nesciunt dolorem recusandae.</p>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Mix:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tenetur minus earum, amet nostrum quibusdam corporis nesciunt dolorem recusandae.</p>

        </div>
         <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="480" src="https://www.youtube.com/embed/5f0XRbgX4iE" title="Tamil mashup songs | tamil cover songs mashup | jukebox"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ReferrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing