import {createSlice} from '@reduxjs/toolkit'

export interface Product {
	catalog: string,
	imgSrc: string,
	price: string,
	quantity: string,
	title: string
}

interface IState {
	Product: Product[],
	FilteredProduct: Product[]
}

const initialState: IState = {
	Product: [
		{
			catalog: '',
			imgSrc: '',
			price: '',
			quantity: '',
			title: ''
		}
	],
	FilteredProduct: [
		{
			catalog: '',
			imgSrc: '',
			price: '',
			quantity: '',
			title: ''
		}
	]
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProductItems: (state, action) => {
			state.Product = action.payload
		},
		filterProductItemsByCategories: (state, action) => {
			state.FilteredProduct = state.Product.filter(p => p.catalog === action.payload);
		},
		filterProductItemsBySelect: (state, action) => {
			switch (action.payload) {
				case 'По убыванию':
					state.FilteredProduct = state.FilteredProduct.sort((a, b) => a.price > b.price ? 1 : -1);
					break;
				case 'По возрастанию':
					state.FilteredProduct = state.FilteredProduct.sort((a, b) => a.price > b.price ? -1 : 1);
					break;
				default:
					return state;
			}
		}
	},
})

export const {setProductItems, filterProductItemsByCategories, filterProductItemsBySelect} = productSlice.actions;