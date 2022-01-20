import {createSlice} from '@reduxjs/toolkit'
import {AppDispatch} from "../../redux/store";
import {collection, getDocs} from "firebase/firestore";
import {database} from "../../firebase-config";

export interface Product {
	catalog: string,
	imgSrc: string,
	price: string,
	quantity: string,
	title: string
}

interface IState {
	isLoading: boolean;
	isError: boolean;
	product: Product[],
	filteredProduct: Product[]
}

const initialState: IState = {
	isLoading: false,
	isError: false,
	product: [
		{
			catalog: '',
			imgSrc: '',
			price: '',
			quantity: '',
			title: ''
		}
	],
	filteredProduct: [
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
		productFetching: (state) => {
			state.isLoading = true;
		},
		productFetchingSuccess: (state, action) => {
			state.isLoading = false;
			state.isError = false;
			state.product = action.payload;
		},
		productFetchingError: (state) => {
			state.isLoading = false;
			state.isError = true;
		},
		filterProductItemsByCategories: (state, action) => {
			state.filteredProduct = state.product.filter(p => p.catalog === action.payload);
		},
		filterProductItemsBySelect: (state, action) => {
			switch (action.payload) {
				case 'По убыванию':
					state.filteredProduct = state.filteredProduct.sort((a, b) => a.price > b.price ? 1 : -1);
					break;
				case 'По возрастанию':
					state.filteredProduct = state.filteredProduct.sort((a, b) => a.price > b.price ? -1 : 1);
					break;
				default:
					return state;
			}
		}
	},
})

// thunk

const productCollectionRef = collection(database, 'products');
export const getProducts = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(productSlice.actions.productFetching())
		const {docs} = await getDocs(productCollectionRef)
		const res = docs.map((doc) => ({...doc.data()}))
		dispatch(productSlice.actions.productFetchingSuccess(res))
	} catch (e) {
		dispatch(productSlice.actions.productFetchingError())
		console.error(e)
	}
}

export const {
	filterProductItemsByCategories,
	filterProductItemsBySelect
} = productSlice.actions;

