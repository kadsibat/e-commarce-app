
import React, { useContext } from "react";
import Slider from "react-slick";
import "./style.css";
import { AppContext } from "../context/AppContext";

function ProductSlick() {
  const {product} = useContext(AppContext);
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
  console.log(product);
  return (
    <div className="slick">
      <Slider {...settings}>
        {
          product?.map((item,index) => {
            return(
              <div className="slick-div" key={index}>
              <img src={item.image} alt="" width={"150px"} style={{margin:"auto"}}/>
              <h4>{item.title}</h4>
              <p>{item.price}</p>
            </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default ProductSlick;
