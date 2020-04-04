import { FontFaces } from './font-faces';
import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
	typography: {
		fontFamily: 'Montserrat'
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'@font-face': [...FontFaces.Montserrat, ...FontFaces.Roboto]
			}
		}
	}
});
