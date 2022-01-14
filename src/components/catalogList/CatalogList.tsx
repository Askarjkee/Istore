import React, {useEffect} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {getDocs, collection} from 'firebase/firestore';
import {database} from '../../firebase-config';


import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {setCatalogItems} from "../../features/product/ProductSlice";


const CatalogTabsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const CatalogTitle = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #705658;
`

const CatalogItem = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 42px;
  color: #12212D;
`

export const CatalogList = () => {
	const dispatch = useAppDispatch();
	const catalogList = useAppSelector(state => state.catalog);

	const catalogCollectionRef = collection(database, 'catalog');
	useEffect(() => {
		const getPosts = async () => {
			const {docs} = await getDocs(catalogCollectionRef)
			const res = docs.map((doc) => ({...doc.data()}))
			dispatch(setCatalogItems(res))
		}
		getPosts()
	}, [])

	return (
		<CatalogTabsWrapper>
			<StyledLink to='#'>
				<CatalogTitle>Каталог товаров</CatalogTitle>
			</StyledLink>
			{
				catalogList.length > 0 && catalogList.map(catalog => {
					return <StyledLink key={catalog.title} to={catalog.href}>
						<CatalogItem>{catalog.title}</CatalogItem>
					</StyledLink>
				})
			}
		</CatalogTabsWrapper>
	);
};
