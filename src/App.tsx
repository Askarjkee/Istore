import React, {useEffect} from 'react';
import {MainLayout} from "./Layout/MainLayout";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {publicRoutes, userRoutes} from "./routes/routes";
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {getProducts} from "./features/product/productSlice";

function App() {
	const isAuth = useAppSelector(state => state.auth.isAuth);

	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, [])

	// TODO zx
	return (
		<Router>
			<Routes>
				<Route element={<MainLayout/>}>
					{
						isAuth ?
							<>
								<Route
									path="/login"
									element={<Navigate to="/"/>}
								/>
								{
									userRoutes.map(component => <Route
										key={component.path}
										path={component.path}
										element={<component.element/>}
									/>)
								}
							</>
							:
							<>
								<Route
									path="*"
									element={<Navigate to="/login"/>}
								/>
								{
									publicRoutes.map(component => <Route
										key={component.path}
										path={component.path}
										element={<component.element/>}
									/>)
								}
							</>
					}
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
