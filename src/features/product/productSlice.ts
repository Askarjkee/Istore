import {createSlice} from '@reduxjs/toolkit'

export interface Product {
	catalog: string,
	imgSrc: string,
	price: string,
	quantity: string,
	title: string
}

const initialState: Array<Product> = [
	{
		catalog: '',
		imgSrc: '',
		price: '',
		quantity: '',
		title: ''
	}
]

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProductItems: (state, action) => {
			return action.payload
		}
	},
})

export const {setProductItems} = productSlice.actions;