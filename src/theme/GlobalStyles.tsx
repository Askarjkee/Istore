import { createGlobalStyle } from "styled-components";

export const theme = {
	fontFamily: 'Roboto',
	color: '#fff'
}

interface ITheme {
	theme: {
		fontFamily: string;
		color: string;
	}
}

export const GlobalStyles = createGlobalStyle<ITheme>`
  * {
    font-family: ${props => props.theme.fontFamily}, sans-serif;
	// color: ${props => props.theme.color};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
