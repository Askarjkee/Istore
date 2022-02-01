import React from 'react';
import styled from "styled-components";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import {Box, Button, Rating} from "@mui/material";
import {getItemStatus} from "../../helpers/productHelper";


interface CardStatus {
	$status: boolean;
}

interface IProps {
	status: number;
	imageSrc: string;
	title: string;
	price: string;
	rating: number | null;
	addProduct: () => void;
}


const StyledCard = styled(Card)`
  && {
    width: 300px;
    min-height: 290px;
  }
`

const CardStatus = styled.span<CardStatus>`
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


export const ProductCard = ({status, imageSrc, title, price, rating, addProduct}: IProps) => {
	return (
		<StyledCard>
			<CardContent>
				<CardStatus $status={status > 0}>
					{getItemStatus(status)}
				</CardStatus>
				<CardMedia
					component="img"
					sx={{height: '100%', marginTop: '10px', marginBottom: '20px'}}
					image={imageSrc}
					alt="Paella dish"
				/>
				<ColumnWrapper>
					<CardName>
						{title}
					</CardName>
					<StyledRating name="rating" value={rating} readOnly/>
				</ColumnWrapper>
			</CardContent>
			<CardActionsWrapper>
				<CardPrice>
					Цена {price} ₸
				</CardPrice>
				<Button onClick={addProduct}>Купить</Button>
			</CardActionsWrapper>
		</StyledCard>

	);
};
