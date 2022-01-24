import {CatalogItems, HomePage, Login, Profile} from "../pages";
import {Product} from "../pages/Product";


export const publicRoutes = [
	{path: '/login', element: Login}
]

export const userRoutes = [
	{path: '/', element: HomePage},
	{path: '/profile', element: Profile},
	{path: '/catalog/:id', element: CatalogItems},
	{path: '/card/:id', element: Product}
]