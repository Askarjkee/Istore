import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {getDocs, collection} from 'firebase/firestore';
import {database} from '../../firebase-config';


import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {setCatalogItems} from "../../features/product/catalogSlice";
import ProductSkeleton from "../skeleton/ProductSkeleton";

interface IProps {
	$active?: boolean;
}


export const CatalogTabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 300px;
`

export const StyledLink = styled(Link)<IProps>`
  text-decoration: none;
  border-radius: 10px;
  height: 50px;
  background-color: ${props => props.$active ? '#1976d2' : 'none'};
  color: ${props => props.$active ? '#fff' : '#12212D'};
  position: relative;

  &:before {
    content: '';
    display: ${props => props.$active ? 'block' : 'none'};
    width: 5px;
    height: 100%;
    background-color: #fff;
    position: absolute;
    left: 10px;
  }
`

const CatalogTitle = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #705658;
  margin-left: 30px;
  margin-bottom: 10px;
`

const CatalogItem = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 42px;
  margin-left: 30px;
`

export const CatalogList = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useAppDispatch();
	const catalogList = useAppSelector(state => state.catalog);

	const {pathname} = useLocation();

	const catalogCollectionRef = collection(database, 'catalog');
	useEffect(() => {
		const getPosts = async () => {
			try {
				setLoading(true);
				const {docs} = await getDocs(catalogCollectionRef)
				const res = docs.map((doc) => ({...doc.data()}))
				dispatch(setCatalogItems(res))
			} catch (e) {
				console.error(e)
			} finally {
				setLoading(false)
			}
		}
		getPosts()
	}, [])

	if (loading) {
		return <ProductSkeleton
				component="catalog"
				value={5}
				/>
	}

	return (
		<CatalogTabsWrapper>
			<CatalogTitle>Каталог товаров</CatalogTitle>
			{
				catalogList && catalogList.map(catalog => {
					return <StyledLink $active={pathname === catalog.href} key={catalog.title} to={catalog.href}>
						<CatalogItem>{catalog.title}</CatalogItem>
					</StyledLink>
				})
			}
		</CatalogTabsWrapper>
	);
};
