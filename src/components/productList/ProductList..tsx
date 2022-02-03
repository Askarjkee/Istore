import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";


import {getFindStatus, sliceString} from "../../helpers/productHelper";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {
	filterProductItemsByCategories,
	filterProductItemsBySelect, Product
} from "../../features/product/productSlice";
import {addProduct, increase} from "../../features/product/basketSlice";
import {Selector} from "../select/Select";
import {ProductCard} from "./ProductCard";


import {SelectChangeEvent} from '@mui/material/Select';
import ProductSkeleton from "../skeleton/ProductSkeleton";


const ProductListWrapper = styled.div`
  width: 100%;
`

const ProductHeaderWrapper = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
`

const ProductText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(18, 33, 45, 0.7);
`

export const ProductCardWrapper = styled.div`
  && {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 20px;
    margin-left: 30px;
    margin-top: 30px;
  }
`

const StyledLink = styled(Link)`
  && {
    text-decoration: none;
  }
`

export const ProductList = () => {
	const {isLoading, isError} = useAppSelector(state => state.product);
	const dispatch = useAppDispatch();

	// filter method
	const [filterMethod, setFilterMethod] = useState('')
	const filterMethods = [
		{value: 'По убыванию'},
		{value: 'По возрастанию'}
	]
	const handleChange = (event: SelectChangeEvent) => {
		setFilterMethod(event.target.value)
	}
	useEffect(() => {
		if (filterMethod) {
			dispatch(filterProductItemsBySelect(filterMethod))
		}
	}, [filterMethod])

	// filter products by categories
	const {pathname} = useLocation();
	const catalogName = sliceString(pathname, 9);
	const filteredProducts = useAppSelector(state => state.product.filteredProduct);
	useEffect(() => {
		dispatch(filterProductItemsByCategories(catalogName))
	}, [catalogName])

	// basket
	const addProductToBasket = (item: Product) => {
		dispatch(addProduct(item))
	}
	const inc = (item: Product) => {
		dispatch(increase(item))
	}

	const {basket} = useAppSelector(state => state.basket);
	console.log(basket)
	if (isLoading) {
		return <ProductSkeleton
			value={12}
			component={"product"}/>
	}
	// TODO add error page
	if (isError) {
		return <h2>something wrong...</h2>
	}

	// TODO FIX button add to card
	return (
		<ProductListWrapper>
			<ProductHeaderWrapper>
				<ProductText>
					{
						getFindStatus(filteredProducts.length)
					}
				</ProductText>
				<Selector
					items={filterMethods}
					label="Сортировка"
					handleChange={handleChange}
					currentItem={filterMethod}
				/>
			</ProductHeaderWrapper>
			<ProductCardWrapper>
				{
					filteredProducts.length > 0 && filteredProducts.map((product) => {
						const isItemInBasket = basket.some(item => item.id === product.id);
						return (
							// <StyledLink key={item.title} to={`/card/${item.id}`}>
							<ProductCard
								isItemInBasket={isItemInBasket}
								increase={() => inc(product)}
								addProduct={() => addProductToBasket(product)}
								rating={product.rating}
								title={product.title}
								imageSrc={product.imgSrc}
								price={product.price}
								status={+product.quantity}/>
							// </StyledLink>
						)
					})
				}
			</ProductCardWrapper>
		</ProductListWrapper>
	);
};

