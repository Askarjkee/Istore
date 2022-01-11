import React from 'react';
import {MainLayout} from "./Layout/MainLayout";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {publicRoutes} from "./routes/routes";


function App() {
	return (
		<Router>
			<MainLayout>
				<Routes>
					{
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
