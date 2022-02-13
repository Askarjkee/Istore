import React from 'react';
import styled from "styled-components";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import {Box, Button, Rating} from "@mui/material";
import {getItemStatus} from "../../helpers/productHelper";
import {Product} from "../../features/product/productSlice";
import {Link} from "react-router-dom";


interface StatusProps {
	$status: boolean;
}

interface IProps {
	product: Product,
	inBasket?: number,
	addProduct: () => void;
	isItemInBasket: boolean;
	increase: () => void;
	decrease: () => void;
}


const StyledCard = styled(Card)`
  && {
    width: 300px;
    min-height: 290px;
  }
`

const CardStatus = styled.span<StatusProps>`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.$status ? '#4DA455' : '#D0021B'};
`


const CardName = styled.span`
  && {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: rgba(18, 33, 45, 0.7);
  }
`

const CardPrice = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: rgba(18, 33, 45, 0.7);
`

const CardActionsWrapper = styled(CardActions)`
  && {
    justify-content: space-between;
  }
`

const StyledRating = styled(Rating)`
  && {
    margin-top: 10px;
  }
`

const ColumnWrapper = styled(Box)`
  && {
    display: flex;
    flex-direction: column;
  }
`

const StyledLink = styled(Link)`
  && {
    text-decoration: none;
  }
`


export const ProductCard = ({
								product,
								addProduct,
								isItemInBasket,
								inBasket,
								increase,
								decrease
							}: IProps) => {
	const {quantity, imgSrc, title, rating, price, id} = product;
	return (
		<StyledCard>
			<StyledLink to={`/card/${id}`}>
				<CardContent>
					<CardStatus $status={+quantity > 0}>
						{getItemStatus(+quantity)}
					</CardStatus>
					<CardMedia
						component="img"
						sx={{height: '100%', marginTop: '10px', marginBottom: '20px'}}
						image={imgSrc}
						alt="product"
					/>
					<ColumnWrapper>
						<CardName>
							{title}
						</CardName>
						<StyledRating name="rating" value={rating} readOnly/>
					</ColumnWrapper>
				</CardContent>
			</StyledLink>
			<CardActionsWrapper>
				<CardPrice>
					Цена {price} ₸
				</CardPrice>
				{
					isItemInBasket ?
						<>
							<Button onClick={decrease}>-</Button>
							{inBasket}
							<Button onClick={increase}>+</Button>
						</>
						:
						<Button onClick={addProduct}>Купить</Button>
				}
			</CardActionsWrapper>
		</StyledCard>
	);
};
