import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from "../features/auth/AuthSlice";
import {catalogSlice} from "../features/product/catalogSlice";
import {productSlice} from "../features/product/productSlice";


export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		catalog: catalogSlice.reducer,
		product: productSlice.reducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch