import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from "../features/auth/AuthSlice";
import {catalogSlice} from "../features/product/ProductSlice";


export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		catalog: catalogSlice.reducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch