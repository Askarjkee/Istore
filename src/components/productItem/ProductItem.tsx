import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {database} from "../../firebase-config";
import styled from "styled-components";

import {sliceString} from "../../helpers/productHelper";
import {ProductImage} from "./ProductImage";

const ProductItemWrapper = styled.div`
	&& {
	  padding-top: 20px;
	}
`

const ProductItemTitle = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 38px;
`

export const ProductItem = () => {
	const [product, setProduct] = useState<any>({});
	const [isLoading, setIsLoading] = useState(false);
	const { pathname } = useLocation();
	const id = sliceString(pathname, 6);
	const docRef = doc(database, "products", id);
	useEffect(() => {
		const getProductById = async () => {
			try {
				setIsLoading(true)
				const docSnap = await getDoc(docRef);
				setProduct(docSnap.data())
			}
			catch(e) {
				console.error(e)
			}
			finally {
				setIsLoading(false)
			}
		}
		getProductById()
	}, [pathname])

	if (isLoading) {
		return <span>Loading...</span>
	}
	return (
		<ProductItemWrapper>
			<ProductItemTitle>{product.title}</ProductItemTitle>
			<ProductImage src={product.imgSrc} alt={product.title}/>
		</ProductItemWrapper>
	);
};
