import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import {store} from './redux/store';
import App from './App';


import {ThemeProvider} from 'styled-components'
import {theme, GlobalStyles} from "./theme/GlobalStyles";


ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyles/>
			<App/>
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
);


