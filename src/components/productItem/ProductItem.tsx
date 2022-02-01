import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {database} from "../../firebase-config";
import styled from "styled-components";

import {sliceString} from "../../helpers/productHelper";
import {ProductImage} from "./ProductImage";
import {Box, Rating} from "@mui/material";

const ProductItemWrapper = styled(Box)`
	&& {
	  padding-top: 20px;
	}
`

const ProductItemTitle = styled(Box)`
  font-weight: 400;
  font-size: 30px;
  line-height: 38px;
`

const ProductHeaderWrapper = styled(Box)`
	display: flex;
`

const ProductDetails = styled(Box)`
	padding: 30px;
`

const ProductPrice = styled(Box)`
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
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

	const [value, setValue] = useState<number | null>(product.rating);


	if (isLoading) {
		return <span>Loading...</span>
	}
	return (
		<ProductItemWrapper>
			<ProductItemTitle>{product.title}</ProductItemTitle>
			<ProductHeaderWrapper>
				<ProductImage images={product.images}/>
				<ProductDetails>
					<ProductPrice>
						Цена {product.price} ₸
					</ProductPrice>
					<Rating
						name="rating"
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
					/>
				</ProductDetails>
			</ProductHeaderWrapper>
		</ProductItemWrapper>
	);
};
