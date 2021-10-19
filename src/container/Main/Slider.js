import './Slider.css'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slide1 from '../../assets/Sliders/autumn.jpg'
import Slide2 from '../../assets/Sliders/bike.jpg'
import Slide3 from '../../assets/Sliders/family.jpg'
import Slide4 from '../../assets/Sliders/lake.jpg'
import Slide5 from '../../assets/Sliders/marriage.jpg'
import Slide6 from '../../assets/Sliders/man-walking-dog.jpg'

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
    }
    return (
        <Slider {...settings}>
            <div>
                <img className="slider" src={Slide1} alt="Slide1" />
            </div>
            <div>
                <img className="slider" src={Slide2} alt="Slide2" />
            </div>
            <div>
                <img className="slider" src={Slide3} alt="Slide3" />
            </div>
            <div>
                <img className="slider" src={Slide4} alt="Slide4" />
            </div>
            <div>
                <img className="slider" src={Slide5} alt="Slide5" />
            </div>
            <div>
                <img className="slider" src={Slide6} alt="Slide6" />
            </div>
        </Slider>
    )
}
