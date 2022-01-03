import React, {FC, ReactNode} from 'react';
import {Header} from "./Header/Header";

interface IProps {
	children: ReactNode
}

export const MainLayout:FC<IProps> = ({children}) => {
	return (
		<>
			<Header/>
			{children}
		</>
	);
};
