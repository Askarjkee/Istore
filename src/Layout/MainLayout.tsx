import React, {FC, ReactNode} from 'react';
import { Outlet } from 'react-router-dom';
import styled from "styled-components";

import {Header} from "./Header/Header";
import {Subheader} from "./Subheader/Subheader";

const Container = styled.div`
  padding: 0 50px;
`

export const MainLayout = () => {
	return (
		<>
			<Header/>
			<Subheader/>
			<Container>
				<Outlet />
			</Container>
		</>
	);
};
