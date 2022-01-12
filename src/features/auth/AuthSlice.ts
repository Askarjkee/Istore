import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
	isAuth: boolean;
	email: string | null;
	displayName?: string | null;
	photoURL?: string | null;
}

const initialState: AuthState = {
	isAuth: false,
	email: null,
	displayName: null,
	photoURL: null
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authUser: (state, action:PayloadAction<AuthState>) => {
			return action.payload
		},
		logoutUser: (state) => {
			return initialState
		}
	},
})

export const { authUser, logoutUser } = authSlice.actions;