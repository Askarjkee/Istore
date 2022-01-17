import React from 'react';
import { ProductCardWrapper } from '../productList/ProductList.';
import {Skeleton} from "@mui/material";
import {CatalogTabsWrapper, StyledLink} from "../catalogList/CatalogList";

interface IProps {
	value: number;
	animation?: "wave" | "pulse";
	component: 'catalog' | 'product';
}


const ProductSkeleton = ({value, animation = "wave", component}: IProps) => {
	const skeletonItems = [];
	for (let i = 0; i < value; i++) {
		skeletonItems.push(i)
	}
	return (
		component === "product" ?
			<ProductCardWrapper>
				{
					skeletonItems.map(i => <Skeleton key={i} animation={animation}/>)
				}
			</ProductCardWrapper>
			:
			<CatalogTabsWrapper>
				{
					skeletonItems.map(i => <StyledLink key={i} to="#">
						<Skeleton  animation={animation}/>
					</StyledLink>)
				}
			</CatalogTabsWrapper>
	);
};

export default ProductSkeleton;