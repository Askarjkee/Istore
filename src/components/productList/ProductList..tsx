import React, {useEffect, useState} from 'react';
import {ProductCard} from "./ProductCard";
import styled from "styled-components";
import {collection, getDocs} from "firebase/firestore";
import {database} from "../../firebase-config";
import {useLocation} from "react-router-dom";
import {SliceString} from "../../helpers/sliceString";

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

// TODO add redux not local state

export const ProductList = () => {
	const {pathname} = useLocation();
	const catalogName = SliceString(pathname, 9);

	const [products, setProducts] = useState([{}]);

	const productCollectionRef = collection(database, catalogName);
	useEffect(() => {
		const getProducts = async () => {
			const {docs} = await getDocs(productCollectionRef)
			const res = docs.map((doc) => ({...doc.data()}))
			setProducts(res)
		}
		getProducts()
	}, [catalogName])
	return (
		<ProductCardWrapper>
			{
				products && products.map((item: any) =>
					<ProductCard
					key={item.title}
					title={item.title}
					imageSrc={item.imgSrc}
					price={item.price}
					status={item.quantity}/>)
			}
		</ProductCardWrapper>
	);
};

