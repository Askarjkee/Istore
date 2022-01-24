import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styled from "styled-components";
import {useAppSelector} from '../../redux/hooks';
import {Link} from "react-router-dom";

const MyTextField = styled(TextField)`
  && {
    width: 555px;
  }
`

const StyledLink = styled(Link)`
  && {
    img {
      margin-right: 10px;
    }
  }
`


export const MuiAutocomplete = () => {
	const {product} = useAppSelector(state => state.product);

	return (
		<Autocomplete
			id="find-something"
			options={product}
			getOptionLabel={(option) => option.title}
			renderOption={(props, option) => {
				return (
					<li {...props}>
						<StyledLink to={`/card/${option.id}`}>
							<img
								loading="lazy"
								width="20"
								src={option.imgSrc}
								alt={option.title}
							/>
							{option.title}
						</StyledLink>
					</li>
				)
			}}
			sx={{width: 300}}
			freeSolo
			renderInput={(params) => (
				<MyTextField
					{...params}
					label="Поиск товара"
				/>
			)}
		/>
	);
};
