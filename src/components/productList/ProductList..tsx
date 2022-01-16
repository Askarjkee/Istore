import React, {useEffect, useState} from 'react';
import {collection, getDocs} from "firebase/firestore";
import styled from "styled-components";
import {useLocation} from "react-router-dom";


import {database} from "../../firebase-config";
import {ProductHelper} from "../../helpers/productHelper";
import {ProductCard} from "./ProductCard";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {Product, setProductItems} from "../../features/product/productSlice";

const ProductHeaderWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
`

const ProductText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(18, 33, 45, 0.7);
`

const ProductCardWrapper = styled.div`
  && {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 303px);
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: space-between;
    margin-left: 30px;
  }
`

export const ProductList = () => {
	const dispatch = useAppDispatch();
	const productCollectionRef = collection(database, 'products');
	useEffect(() => {
		const getProducts = async () => {
			const {docs} = await getDocs(productCollectionRef)
			const res = docs.map((doc) => ({...doc.data()}))
			dispatch(setProductItems(res))
		}
		getProducts()
	}, [])

	// filter products by categories

	const {pathname} = useLocation();
	const catalogName = ProductHelper(pathname, 9);
	const products = useAppSelector(state => state.product);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	useEffect(() => {
		const res = products.filter(p => p.catalog === catalogName);
		setFilteredProducts(res);
	}, [catalogName, products])

	return (
		<div>
			<ProductHeaderWrapper>
				<ProductText>
					Найдено {filteredProducts.length} товаров
				</ProductText>
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
		</div>
	);
};

