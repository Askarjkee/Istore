import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {getProducts} from "./features/product/productSlice";
import {MyRoutes} from "./routes/MyRoutes";

function App() {
	const isAuth = useAppSelector(state => state.auth.isAuth);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, [])

	return (
			<>
				<MyRoutes isAuth={isAuth}/>
			</>
	);
}

export default App;
