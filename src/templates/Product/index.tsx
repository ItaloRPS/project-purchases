'use client'
import {FC } from "react";
import './styles.scss'
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Gallery } from "@/components/Gallery";
import { CardBuy } from "@/components/CartItem/CardBuy";

interface InputTextProps  {
  onLogin?: (email: string, password: string) => Promise<void>;
  error?: string;
}
export const ProductPage= ()=>{
   const imgs=[ {
    img: "https://picsum.photos/1200/1300",
    link: "string",
    alt: "img1",
},{
  img: "https://picsum.photos/1200/1300",
  link: "string",
  alt: "img1",
},{
  img: "https://picsum.photos/1200/1300",
  link: "string",
  alt: "img1",
},{
  img: "https://picsum.photos/1200/1300",
  link: "string",
  alt: "img1",
},{
  img: "https://picsum.photos/1200/1300",
  link: "string",
  alt: "img1",
},{
  img: "https://picsum.photos/1200/1300",
  link: "string",
  alt: "img1",
},{
  img: "https://picsum.photos/1200/1300",
  link: "string",
  alt: "img1",
},]
    return (
        <div className="product-template">
          <div className="item-template gallery-product">
            <Gallery images={imgs}/>
          </div>
          <div className="item-template">
            <CardBuy/>
          </div>
        </div>
        );
}