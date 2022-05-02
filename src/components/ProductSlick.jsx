
import React from "react";
import logo from "../assets/logo.png";
import Slider from "react-slick";
import "./style.css"
function ProductSlick() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slick">
      <Slider {...settings}>
        {
          [1,2,3,4,5,6,7,8].map((item,index) => {
            return(
              <div className="slick-div" key={index}>
              <img src={logo} alt="" width={"250px"} style={{margin:"auto"}}/>
              merhaba
            </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default ProductSlick;
