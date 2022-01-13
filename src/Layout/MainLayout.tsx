import React, {FC, ReactNode} from 'react';
import {Header} from "./Header/Header";
import styled from "styled-components";
import {Subheader} from "./Subheader/Subheader";

interface IProps {
	children: ReactNode
}

const Container = styled.div`
  padding: 0 50px;
`

export const MainLayout: FC<IProps> = ({children}) => {
	return (
		<>
			<Header/>
			<Subheader/>
			<Container>
				{children}
			</Container>
		</>
	);
};
