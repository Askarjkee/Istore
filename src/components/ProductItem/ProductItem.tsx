import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {sliceString} from "../../helpers/productHelper";
import {doc, getDoc} from "firebase/firestore";
import {database} from "../../firebase-config";

export const ProductItem = () => {
	const [product, setProduct] = useState<any>(null);
	const { pathname } = useLocation();
	const id = sliceString(pathname, 6);
	const docRef = doc(database, "products", id);
	useEffect(() => {
		const getProductById = async () => {
			try {
				const docSnap = await getDoc(docRef);
				setProduct(docSnap.data())
			}
			catch(e) {
				console.error(e)
			}
		}
		getProductById()
	}, [pathname])
	return (
		<div>
			{product && product.title}
		</div>
	);
};
