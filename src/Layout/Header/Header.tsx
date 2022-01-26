import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";


import {AppBar, Button, Toolbar} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';


import {MuiAutocomplete} from "../../components/autocomplete/MuiAutocomplete";
import {useAppSelector} from "../../redux/hooks";
import {UserPanel} from "./UserPanel";


const StyledAppBar = styled(({theme, ...props}) => <AppBar {...props}/>)`

`;

const StyledToolbar = styled(Toolbar)`
  && {
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
  }
`

const MyLink = styled(Link)`
  && {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #1976d2;
    cursor: pointer;
  }
`


export const Header = () => {
	const {isAuth, photoURL} = useAppSelector(state => state.auth);

	return (
		<StyledAppBar color='transparent' position="static">
			<StyledToolbar>
				<MyLink to='/'>
					<HomeIcon/>
					iStore
				</MyLink>
				<MuiAutocomplete/>
				{
					isAuth ?
						<UserPanel photoURL={photoURL}/>
						:
						<MyLink to='/login'>
							<Button variant="outlined">Login</Button>
						</MyLink>
				}
			</StyledToolbar>
		</StyledAppBar>
	);
};
