import React from 'react';
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";

interface ItemProps {
	$active?: boolean;
}

const SubheaderWrapper = styled.div`
  height: 70px;
  background-color: #1976d2;
  display: flex;
  align-items: center;
  padding: 0 50px;
`

const SubheaderItem = styled(Link)<ItemProps>`
  color: #fff;
  text-decoration: none;
  margin-right: 40px;
  position: relative;
  
  &:before {
  	content: '';
	display: ${props => props.$active ? 'block' : 'none'};
	position: absolute;
	bottom: -15px;
	width: 100%;
	height: 2px;
	background-color: #fff;
  }
`

const menuItems = [
	{to: '/', name: 'Все товары'},
	{to: '/promo', name: 'Скидки и акции'},
	{to: '/about', name: 'О нас'},
	{to: '/delivery', name: 'Доставка и оплата'},
	{to: '/contacts', name: 'Контакты'},
]

export const Subheader = () => {
	const { pathname } = useLocation();

	return (
		<SubheaderWrapper>
			{
				menuItems.map(item => {
					return (
						<SubheaderItem $active={item.to === pathname} key={item.name} to={item.to}>
							{item.name}
						</SubheaderItem>
					)
				})
			}
		</SubheaderWrapper>
	);
};
