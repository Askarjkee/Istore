import React from 'react';
import {auth, provider} from "../firebase-config";
import {signInWithPopup} from 'firebase/auth';

import {Button} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../redux/hooks";

import {authUser} from '../features/auth/AuthSlice';


export const Login = () => {
	const dispatch = useAppDispatch();
	const isAuth = useAppSelector(state => state.auth.isAuth);

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then(res => dispatch(authUser({
				isAuth: true,
				displayName: res.user.displayName,
				email: res.user.email,
				photoURL: res.user.photoURL
			})))
	}
	return (
		<>
			{
				isAuth ?
					<div>hey</div>
					:
					<div>
						<p>Sign in with Google to continue</p>
						<Button onClick={signInWithGoogle}>Sign in with Google</Button>
					</div>
			}
		</>
	);
};
