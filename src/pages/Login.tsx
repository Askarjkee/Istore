import React from 'react';
import {auth, provider} from "../firebase-config";
import { signInWithPopup } from 'firebase/auth';

import {Button} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../redux/hooks";


// TODO

export const Login = () => {
	const dispatch = useAppDispatch();

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then(res => console.log(res))
	}
	return (
		<div>
			<p>Sign in with Google to continue</p>
			<Button onClick={signInWithGoogle}>Sign in with Google</Button>
		</div>
	);
};
