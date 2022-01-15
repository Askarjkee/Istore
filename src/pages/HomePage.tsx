import React from 'react';
import styled from "styled-components";

import {CatalogList} from "../components/catalogList/CatalogList";
import {MainSlider} from "../components/slider/MainSlider";


const HomeWrapper = styled.section`

`

const PromoWrapper = styled.div`
  display: flex;
  height: 500px;
  margin-top: 30px;
`

export const HomePage = () => {
	return (
		<HomeWrapper>
			<PromoWrapper>
				<CatalogList/>
				<MainSlider/>
			</PromoWrapper>
		</HomeWrapper>
	);
};
