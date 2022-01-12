import React from 'react';
import {MainLayout} from "./Layout/MainLayout";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {publicRoutes, userRoutes} from "./routes/routes";
import {useAppSelector} from "./redux/hooks";

function App() {
	const isAuth = useAppSelector(state => state.auth.isAuth);

	// TODO add 404 page for routes
	return (
		<Router>
			<MainLayout>
				<Routes>
					{
						isAuth ?
							userRoutes.map(component => <Route
								key={component.path}
								path={component.path}
								element={<component.element/>}
							/>)
							:
							publicRoutes.map(component => <Route
								key={component.path}
								path={component.path}
								element={<component.element/>}
							/>)
					}
				</Routes>
			</MainLayout>
		</Router>
	);
}

export default App;
