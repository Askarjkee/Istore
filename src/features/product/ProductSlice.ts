import {createSlice} from '@reduxjs/toolkit'

const initialState = [
	{href: '', title: ''}
]

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		setCatalogItems: (state, action) => {
			return action.payload
		}
	},
})

export const {setCatalogItems} = catalogSlice.actions;