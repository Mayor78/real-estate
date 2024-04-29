import React from 'react'
import{  navbar}  from "../styles/navbar.css";

const SlideTwo = () => {
    const house1 ="https://img.freepik.com/premium-photo/big-american-house-generative-ai_170984-9624.jpg?w=826"
    const house2 ="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2050.jpg?t=st=1714343579~exp=1714347179~hmac=10573c86f6aed8255e8d7021cb026790af903c4e1edf34db196453e8af9ccebd&w=740"
    const house3 = "https://img.freepik.com/premium-photo/luxury-3d-rendering_862994-2121.jpg?w=740"
  return (
    <div className='containerOne'>
      <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={house1} class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item">
      <img src={house2}class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item">
      <img src={house3}class="d-block w-100" alt=""/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default SlideTwo
