// components/Carrossel.js
import React from 'react';
import Slider from 'react-slick';
import * as S from './styles'

type CarrosselBannerProps = {
  children:React.ReactNode
}

export const CarrosselBanner:React.FC<CarrosselBannerProps> = ({children}) => {
  const settings = {
    dots: true,
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
    <S.Wapper>
        <Slider {...settings}>
            {children}
        </Slider>
    </S.Wapper>
  );
};

