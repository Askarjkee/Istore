import {createSlice} from '@reduxjs/toolkit'
import {AppDispatch} from "../../redux/store";
import {collection, getDocs} from "firebase/firestore";
import {database} from "../../firebase-config";

interface CatalogItem {
	catalog: string;
	href: string;
	title: string;
}

interface IState {
	isLoading: boolean;
	error: string;
	catalog: CatalogItem[]
}

const initialState: IState = {
	isLoading: false,
	error: '',
	catalog: [
		{catalog: '', href: '', title: ''}
	]
}

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		catalogFetching: (state) => {
			state.isLoading = true;
		},
		catalogFetchingSuccess: (state, action) => {
			state.isLoading = false;
			state.error = '';
			state.catalog = action.payload
		},
		catalogFetchingError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		}
	},
})


const catalogCollectionRef = collection(database, 'catalog');
export const getCatalog = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(catalogSlice.actions.catalogFetching())
		const { docs } = await getDocs(catalogCollectionRef)
		const res = docs.map((doc) => ({...doc.data()}))
		dispatch(catalogSlice.actions.catalogFetchingSuccess(res))
	} catch (e) {
		dispatch(catalogSlice.actions.catalogFetchingError(`catalogSlice + ${e}`))
	}
}
