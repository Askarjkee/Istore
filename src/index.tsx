import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import {ThemeProvider} from 'styled-components'
import {theme, GlobalStyles} from "./theme/GlobalStyles";


ReactDOM.render(
	<ThemeProvider theme={theme}>
		<GlobalStyles/>
		<App/>
	</ThemeProvider>,
	document.getElementById('root')
);


