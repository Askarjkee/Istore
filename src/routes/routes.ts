import {HomePage, Login, Profile} from "../pages";

export const publicRoutes = [
	{path: '/login', element: Login},
]

export const userRoutes = [
	{path: '/', element: HomePage},
	{path: '/profile', element: Profile}
]