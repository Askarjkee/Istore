import React from 'react';
import {MainLayout} from "./Layout/MainLayout";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {publicRoutes, userRoutes} from "./routes/routes";
import {useAppSelector} from "./redux/hooks";

function App() {
	const isAuth = useAppSelector(state => state.auth.isAuth);

	return (
		<Router>
			<MainLayout>
				<Routes>
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
				</Routes>
			</MainLayout>
		</Router>
	);
}

export default App;
