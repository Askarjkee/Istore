import React from 'react';
import styled from "styled-components";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import {Button} from "@mui/material";

interface CardStatus {
	$status: boolean;
}

interface IProps {
	status: string;
	imageSrc: string;
	title: string;
	price: string;
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


export const ProductCard = ({status, imageSrc, title, price}: IProps) => {
	return (
		<StyledCard>
			<CardContent>
				<CardStatus $status>
					{status}
				</CardStatus>
				<CardMedia
					component="img"
					sx={{height: '100%', marginTop: '10px', marginBottom: '20px'}}
					image={imageSrc}
					alt="Paella dish"
				/>
				<CardName>
					{title}
				</CardName>
			</CardContent>
			<CardActionsWrapper>
				<CardPrice>
					Цена {price} ₽
				</CardPrice>
				<Button>Купить</Button>
			</CardActionsWrapper>
		</StyledCard>
	);
};
