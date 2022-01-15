import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
	Pagination,
	Autoplay
} from 'swiper';
import "swiper/css/bundle";
import styled from "styled-components";

import iphoneImg from './img/iphone.jpg';
import androidImg from './img/android.jpg';

SwiperCore.use([Pagination, Autoplay]);

const MySwiper = styled(Swiper)`
  && {
	width: 900px;
	height: 500px;
	margin-left: 100px;
	border-radius: 10px;
	img {
	  width: 100%;
	  height: 100%;
      object-fit: fill;
	}
  }
`

export const MainSlider = () => {
	return (
			<MySwiper loop autoplay pagination={{"clickable": true}}>
				<SwiperSlide><img src={iphoneImg} alt="phones"/></SwiperSlide>
				<SwiperSlide><img src={androidImg} alt="phones"/></SwiperSlide>
			</MySwiper>
	);
};
