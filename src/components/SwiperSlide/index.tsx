'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.scss'
import { ReactNode, useEffect, useRef, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

type SwiperSlideProps ={
  data:{
    img:string,
    alt:string
  }[]
}
export const SwiperSlide = ({data}:SwiperSlideProps) =>{
  const sliderRef = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);

  useEffect(() => {
    setNav1(sliderRef.current||undefined);
    setNav2(sliderRef2.current||undefined);
  }, []);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3200,
    nextArrow: <></>,
    prevArrow: <></>,
  };

    return (
      <div className="swinper-slide">
          <div className="slider-container">
            <Slider asNavFor={nav2} ref={slider => {sliderRef.current = slider }}{...settings}>
            {data?.map((value)=>(
                <div className="img-slider">
                  <img src={value.img} />
              </div>
              ))}
            </Slider>
            <div className='btns-actions'>
              <button className="button" onClick={previous}>
                <ArrowBackIosNewIcon/>
              </button>
              <button className="button" onClick={next}>
                <ArrowForwardIosIcon/>
              </button>
            </div>
        </div>
        <div className="options-slider-container">

        <Slider
        asNavFor={nav1}
        ref={slider=>{sliderRef2.current = slider }}
        dots={true}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        nextArrow={<></>}
        prevArrow={<></>}
      >
          {data?.map((value)=>(
                  <img src={value.img} />
              ))}
      </Slider>
        </div>
      </div>
    )
}