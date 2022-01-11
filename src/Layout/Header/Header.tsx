import React from 'react';
import {Link} from 'react-router-dom';


import {AppBar, Button, Toolbar} from "@mui/material";
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import {MuiAutocomplete} from "../../components/autocomplete/MuiAutocomplete";

const StyledAppBar = styled(({theme, ...props}) => <AppBar {...props}/>)`

`;

const StyledToolbar = styled(Toolbar)`
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
`

const MyLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #1976d2;
  cursor: pointer;
`

export const Header = () => {
	return (
		<StyledAppBar color='transparent' position="static">
			<StyledToolbar>
				<MyLink to='/'>
					<HomeIcon/>
					iStore
				</MyLink>
				<MuiAutocomplete/>
				<MyLink to='/login'>
					<Button>Login</Button>
				</MyLink>
			</StyledToolbar>
		</StyledAppBar>
	);
};
