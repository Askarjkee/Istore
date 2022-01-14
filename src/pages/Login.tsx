import React from 'react';
import {auth, provider} from "../firebase-config";
import {signInWithPopup} from 'firebase/auth';

import {Box, Button, Typography} from "@mui/material";
import {useAppDispatch} from "../redux/hooks";

import {authUser} from '../features/auth/AuthSlice';


export const Login = () => {
	const dispatch = useAppDispatch();

	const signInWithGoogle = async () => {
		try {
			const { user } = await signInWithPopup(auth, provider);
			dispatch(authUser({
				isAuth: true,
				displayName: user.displayName,
				email: user.email,
				photoURL: user.photoURL
			}))
		} catch (e) {
			console.error(e)
		}
	}
	return (
		<>
			{
					<Box>
						<Typography>Sign in with Google to continue</Typography>
						<Button onClick={signInWithGoogle}>Sign in with Google</Button>
					</Box>
			}
		</>
	);
};
