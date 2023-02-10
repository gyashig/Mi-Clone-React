import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import'bootstrap/dist/css/bootstrap.min.css';

const Sliders= ({start}) => {
  return (
    <Carousel fade>
       {
       start.map((items,index) =>(
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={items}
            alt="First slide"
            />
        </Carousel.Item>

       ))
       }
      
    </Carousel>
  )
}

export default Sliders
