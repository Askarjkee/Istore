import React from 'react';
import styled from "styled-components";

import {useLocation} from "react-router-dom";
import {CatalogList} from "../components/catalogList/CatalogList";
import {ProductList} from "../components/productList/ProductList.";


const CatalogItemsWrapper = styled.section`
  
`

const CatalogContentWrapper = styled.div`
	display: flex;
`

export const CatalogItems = () => {
	const {pathname} = useLocation();
	return (
		<CatalogItemsWrapper>
			<CatalogContentWrapper>
				<CatalogList/>
				<ProductList/>
			</CatalogContentWrapper>
		</CatalogItemsWrapper>
	);
};
