import React from 'react';
import {Box} from "@mui/material";
import styled from "styled-components";

interface IProps {
	src: string;
	alt: string;
}

const ImageWrapper = styled(Box)`
	&& {
	  margin-top: 20px;
	}
`

const Image = styled.img`
	&& {
	  width: 350px;
	  height: 350px;
	}
`

export const ProductImage = ({src, alt}: IProps) => {
	return (
		<ImageWrapper>
			<Image src={src} alt={alt}/>
		</ImageWrapper>
	);
};
