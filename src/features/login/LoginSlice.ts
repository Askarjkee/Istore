import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState} from "../../redux/store";

interface LoginState {
	isLogin: boolean;
	email: string;
	displayName: string;
	photoURL?: string;
}

const initialState: LoginState = {
	isLogin: false,
	email: '',
	displayName: '',
	photoURL: ''
}

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		login: (state, action:PayloadAction<LoginState>) => {
			state.isLogin = true
			state = action.payload
		}
	},
})

export const { login } = loginSlice.actions;