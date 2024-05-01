import React from 'react'
import { navbar  }from "../styles/navbar.css";
const Carousel = () => {
    
const home1 =" https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?t=st=1714342236~exp=1714345836~hmac=6a178af7d16dd02370f84e233251b6424252046fe0613a7adee68ef3ebfc5d4b&w=826"
const home2 ="https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1714342337~exp=1714345937~hmac=5124a1487cde0da5e31729ea7c89171f88283b927300b57f440aa0fc75ecedee&w=740"
const home3 ="https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150749.jpg?t=st=1714342432~exp=1714346032~hmac=a3f482703ee5401e7e253f9c1227e6e567720b3d384fd68de5f38d8dbd6defc5&w=740"
  return (
    <div className='containerTwo'>
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={home1} className="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-md-block text-black bold">
        <h2>Mini Duplex</h2>
        <h4>This Apartment is Good for  Familly  And very view</h4>
      </div>
    </div>
    <div className="carousel-item">
      <img src={home2} className="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-md-block">
      <h2>Bungalow</h2>
        <h4>This Apartment is Good for  Familly  And very view</h4>
      </div>
    </div>
    <div className="carousel-item">
      <img src={home3} className="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-md-block">
      <h2>Mini Flat</h2>
        <h4>This Apartment is Good for  Familly  And Swimming Pool view</h4>
      </div>
    </div>
    <div className="carousel-item">
      <img src={home3} className="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-md-block">
      <h2>Mini Duplex</h2>
        <h4>This Apartment is Good for  Familly  And very view</h4>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel
