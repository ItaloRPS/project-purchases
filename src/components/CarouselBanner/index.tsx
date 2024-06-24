'use client'
import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.scss'

type CarrosselBannerProps = {
  children:React.ReactNode
}

export const CarrosselBanner:React.FC<CarrosselBannerProps> = ({children}) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3200,
    nextArrow: <></>,
    prevArrow: <></>,
    
  };

  return (
    <div className='wapper-banner'>
        <Slider {...settings}>
            {children}
        </Slider>
    </div>
  );
};

