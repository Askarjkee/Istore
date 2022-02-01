import {
	CatalogItems,
	HomePage,
	Login,
	Profile,
	Product,
	Basket
} from "../pages";


export const publicRoutes = [
	{path: '/login', element: Login}
]

export const userRoutes = [
	{path: '/', element: HomePage},
	{path: '/profile', element: Profile},
	{path: '/catalog/:id', element: CatalogItems},
	{path: '/card/:id', element: Product},
	{path: '/basket', element: Basket}
]