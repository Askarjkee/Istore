import React from 'react';
import styled from "styled-components";

import {useLocation} from "react-router-dom";
import {CatalogList} from "../components/catalogList/CatalogList";
import {ProductList} from "../components/productList/ProductList.";


const CatalogItemsWrapper = styled.section`
  padding-top: 70px;
`

const CatalogContentWrapper = styled.div`
	display: flex;
`

export const CatalogItems = () => {

	return (
		<CatalogItemsWrapper>
			<CatalogContentWrapper>
				<CatalogList/>
				<ProductList/>
			</CatalogContentWrapper>
		</CatalogItemsWrapper>
	);
};
