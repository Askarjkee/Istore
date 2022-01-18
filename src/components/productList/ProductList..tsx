import React, {useEffect, useState} from 'react';
import {collection, getDocs} from "firebase/firestore";
import styled from "styled-components";
import {useLocation} from "react-router-dom";


import {database} from "../../firebase-config";
import {getFindStatus, ProductHelper} from "../../helpers/productHelper";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {
	filterProductItemsByCategories,
	filterProductItemsBySelect,
	setProductItems
} from "../../features/product/productSlice";
import {Selector} from "../select/Select";
import {ProductCard} from "./ProductCard";


import { SelectChangeEvent } from '@mui/material/Select';
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

export const ProductList = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useAppDispatch();
	const productCollectionRef = collection(database, 'products');
	useEffect(() => {
		const getProducts = async () => {
			try {
				setLoading(true)
				const {docs} = await getDocs(productCollectionRef)
				const res = docs.map((doc) => ({...doc.data()}))
				dispatch(setProductItems(res))
			} catch (e) {
				console.error(e)
			} finally {
				setLoading(false)
			}
		}
		getProducts()
	}, [])

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
	const catalogName = ProductHelper(pathname, 9);
	const filteredProducts = useAppSelector(state => state.product.FilteredProduct);
	useEffect(() => {
		dispatch(filterProductItemsByCategories(catalogName))
	}, [catalogName])


	if (loading) {
		return <ProductSkeleton
					value={12}
					component={"product"}/>
	}

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
					filteredProducts && filteredProducts.map((item) =>
						<ProductCard
							key={item.title}
							title={item.title}
							imageSrc={item.imgSrc}
							price={item.price}
							status={+item.quantity}/>)
				}
			</ProductCardWrapper>
		</ProductListWrapper>
	);
};

