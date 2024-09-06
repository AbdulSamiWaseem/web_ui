import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './scroll.css'
import { BsWindowFullscreen } from "react-icons/bs";
const Scroll = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
    };
    return (
        <div className='ui-scroll'>
            <h1><BsWindowFullscreen size={20} /> Synergization</h1>
            <Slider  {...settings}>
                <div>
                    <div className='scroll'>
                        <h2>Efficiently Unleash</h2>
                        <p>Dramatically maintain clicks-and-mortar solutions without functional solutions</p>
                    </div>
                </div>
                <div>
                    <div className='scroll'>
                        <h2>Proactively Pontificate</h2>
                        <p>Holistically pontificate installed base portals after maintainable products.</p>
                    </div>
                </div>
                <div>
                    <div className='scroll'>
                        <h2>Dramatically Engage</h2>
                        <p>Objectively innovate empowered manufactured products whereas parallel platforms.</p>
                    </div>
                </div>
            </Slider>
        </div>
    );

}
export default Scroll;

