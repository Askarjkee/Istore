import {Product} from "./productSlice";
import {createSlice} from "@reduxjs/toolkit";

interface IState {
	basket: Product[]
}

const initialState: IState = {
	basket: []
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.basket.push(action.payload)
		}
	}
})

export const {
	addProduct
} = basketSlice.actions;