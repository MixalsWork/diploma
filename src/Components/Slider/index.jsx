import React, { Component } from "react";
import Slider from "react-slick";
import galeryList from './Gallery.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick-theme.css";
import style from './index.module.css'
import arrow from './img/arrow.svg'

let newGalleryArray = [];

function GalleryCreator(element){
    return(
        <div className={style.item}>
            <img
              className={style.image}      
              src={element.src}
              alt={element.name}
              >
            </img>
            <h1 className={style.item__title}>{element.name}</h1>
            <p className={style.item__description}>{element.descr} 
             <a href={element.url}>
              <img className={style.itemArrow} src={arrow} alt='arrow'/>
             </a>
            </p>
        </div>
    );
}
function GalleryAppAppend(elementArr) {
    elementArr.forEach(element => {
        let tempElement = GalleryCreator(element);
        newGalleryArray.push(tempElement)
    });
}
GalleryAppAppend(galeryList)

//hook use state



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      dots: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerPadding: "0px",
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };
    return (
      <div className={style.gallery} id='gallery'>
         <div className={style.container}>
            <h1  className={style.title}>Полезная информация</h1>
            <Slider {...settings}>
            {newGalleryArray}
            </Slider>
         </div>
      </div>
    );
  }
}