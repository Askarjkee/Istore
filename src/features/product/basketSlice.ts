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
			const { inBasket } = action.payload;
			const newItem = {
				...action.payload,
				inBasket: inBasket + 1
			}
			state.basket.push(newItem)
		},
		increase: (state, action) => {
			const { id } = action.payload;
			const isItemInArray = state.basket.some(item => item.id === id);
			if (isItemInArray) {
				state.basket = state.basket.map(product => {
					if (product.id === id) {
						return {
							...product,
							inBasket: product.inBasket + 1
						}
					}
					return product;
				})
			} else {
				state.basket.push(action.payload);
			}
		},
		decrease: (state, action) => {
			const { id } = action.payload;
			const productInBasket = state.basket.find(product => product.id === id);
			if (productInBasket) {
				if (productInBasket.inBasket > 1) {
					state.basket = state.basket.map(product => {
						if (product.id === id) {
							if (product.inBasket > 1) {
								return {
									...product,
									inBasket: product.inBasket - 1
								}
							}
						}
						return product
					})
				} else {
					state.basket = state.basket.filter(product => product.id !== id)
				}
			}
		}
	}
})

export const {
	addProduct,
	increase,
	decrease
} = basketSlice.actions;