import React from 'react'
import {Carousel} from 'react-bootstrap';

function CarouselBootsraps() {
  return (
    <div>
    <Carousel>
  <Carousel.Item className='Turkey'>
    <img
      className="Turkey"
      src="/Asset/Antalaya.jpg"
      alt="Welcome to Turkey"
    />
    <Carousel.Caption>
      <h3>Turkey</h3>
      <p>Welcome to the dream land Antalaya city of Beautiful country Turkey.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="Turkey"
      src="/Asset/Hotairballoon.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Hot Air Balloon</h3>
      <p>Fly in the sky with adveture by Hotairballoon.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="Turkey"
      src="/Asset/Delicious.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Food</h3>
      <p>One of the most delicious and famous food from Turkey .</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default CarouselBootsraps