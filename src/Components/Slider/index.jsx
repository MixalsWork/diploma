import React, { Component } from "react";
import Slider from "react-slick";
import galeryList from './Gallery.json';
// import "slick.css";
// import "slick-theme.css";
import style from './index.module.css'
import arrow from './img/arrow.svg'

let newGalleryArray = [];

function GalleryCreator(element){
    return(
        <div className={`${style.item} slick-slider-card`}>
            <img
              className={style.image}      
              src={element.src}
              alt='random-img'
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
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={style.gallery}>
         <div className={style.container}>
            <h1  className={style.title}>НАЧНИТЕ ПОЛУЧАТЬ ПОЛЕЗНЫЕ ЗНАНИЯ УЖЕ СЕГОДНЯ</h1>
            <Slider {...settings}>
            {newGalleryArray}
            </Slider>
         </div>
      </div>
    );
  }
}