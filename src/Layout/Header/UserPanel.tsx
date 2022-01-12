import React, {useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";


import {Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography} from "@mui/material";
import {Logout} from "@mui/icons-material";


import {useAppDispatch} from "../../redux/hooks";
import {logoutUser} from "../../features/auth/AuthSlice";

interface IProps {
	photoURL?: string | null;
	displayName?: string | null;
}

const StyledMenu = styled(Menu)`
	&& {
	  a {
		text-decoration: none;
		color: inherit;
	  }
	}
`

const StyledMenuItem = styled(MenuItem)`
  && {
    p {
      margin-left: 5px;
    }
  }
`

export const UserPanel = ({photoURL, displayName}: IProps) => {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
	const dispatch = useAppDispatch();

	const stringAvatar = (name: string) => {
		return {
			sx: {
				bgcolor: '#1976d2',
			},
			children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
		};
	}

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<Box sx={{flexGrow: 0}}>
			<Tooltip title="Open settings">
				<IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
					{
						photoURL ?
							<Avatar alt={displayName ? displayName : 'noname'} src={photoURL}/>
							:
							<Avatar {...stringAvatar(displayName ? displayName : 'noname')} />
					}
				</IconButton>
			</Tooltip>
			<StyledMenu
				sx={{mt: '45px'}}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				<Link to='/profile'>
					<StyledMenuItem>
						<Avatar sx={{width: '25px', height: '25px'}}/>
						<Typography>Profile</Typography>
					</StyledMenuItem>
				</Link>
				<StyledMenuItem onClick={() => dispatch(logoutUser())}>
					<Logout/>
					<Typography>Logout</Typography>
				</StyledMenuItem>
			</StyledMenu>
		</Box>
	);
};
