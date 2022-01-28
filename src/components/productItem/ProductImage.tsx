import React, {useState} from 'react';
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
	FreeMode, Navigation, Thumbs
} from 'swiper';

import {Box} from "@mui/material";


SwiperCore.use([FreeMode, Navigation, Thumbs]);

interface IProps {
	images: string[]
}

interface ISwiper {
	$panel?: boolean;
}

const SwiperWrapper = styled(Box)`
  && {
	margin-top: 20px;
	margin-right: 30px;
  }
`

const MySwiper = styled(Swiper)<ISwiper>`
  && {
    margin: 0;
    width: 350px;
    height: ${props => props.$panel ? '80px' : '350px'};

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }
`


export const ProductImage = ({images}: IProps) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

	return (
		<SwiperWrapper>
			<MySwiper spaceBetween={10}
					  navigation={true}
					  thumbs={{swiper: thumbsSwiper}}
			>
				{
					images && images.map(img => {
						return (
							<SwiperSlide>
								<img key={img}
									   src={img}
									   alt='slides'/>
							</SwiperSlide>
						)
					})
				}
			</MySwiper>
			<MySwiper onSwiper={setThumbsSwiper}
					  spaceBetween={10}
					  slidesPerView={4}
					  freeMode={true}
					  watchSlidesProgress={true}
					  $panel>
				{
					images && images.map(img => {
						return (
							<SwiperSlide>
								<img key={img}
									 src={img}
									 alt='slides'/>
							</SwiperSlide>
						)
					})
				}
			</MySwiper>
		</SwiperWrapper>
	);
};
