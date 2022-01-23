import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, userRoutes} from "./routes";
import {MainLayout} from "../Layout/MainLayout";


interface IProps {
	isAuth: boolean;
}

export const MyRoutes = ({isAuth}: IProps) => {
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
};
