import { FontFaces } from './font-faces';
import { createMuiTheme } from '@material-ui/core';
import { fontSize } from 'utils';

export const theme = createMuiTheme({
	typography: {
		fontFamily: 'Montserrat',
		subtitle1: {
			fontSize: fontSize(12)
		},
		h1: {
			fontSize: fontSize(32),
			fontWeight: 'bold',
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 1.5,
			letterSpacing: 'normal',
			color: '#181c19'
		},
		h2: {
			fontSize: fontSize(25),
			fontWeight: 'bold',
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 1.4,
			letterSpacing: 'normal',
			color: '#181c19'
		},
		body1: {
			opacity: 0.5,
			fontSize: fontSize(15),
			fontWeight: 600,
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 1.67,
			letterSpacing: 'normal'
		},

		body2: {
			fontSize: fontSize(15),
			fontWeight: 600,
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 1.67,
			letterSpacing: 'normal'
		},
		button: {
			fontSize: fontSize(15),
			fontWeight: 'bold',
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 1.67,
			textTransform: 'none',
			letterSpacing: 'normal'
		},
		h5: {
			fontSize: fontSize(20),
			fontWeight: 600,
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 1.5,
			letterSpacing: 'normal'
		},
		h6: {
			fontSize: fontSize(15),
			fontWeight: 600,
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 1.67,
			letterSpacing: 'normal'
		},
		caption: {
			opacity: 0.5,
			fontSize: fontSize(10),
			fontWeight: 600,
			fontStretch: 'normal',
			fontStyle: 'normal',
			lineHeight: 1.5,
			letterSpacing: 'normal'
		}
	},
	palette: {
		common: {
			black: '#181c19'
		},
		primary: {
			main: '#181c19',
			contrastText: '#ffffff'
		},
		secondary: {
			main: '#00b559',
			contrastText: '#ffffff'
		},
		text: {
			primary: '#181c19',
			secondary: '#00b559'
		},
		background: {
			default: '#fff',
			paper: '#fff'
		}
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'@font-face': [...FontFaces.Montserrat, ...FontFaces.Roboto]
			}
		},
		MuiBackdrop: {
			root: {
				backgroundColor: 'rgba(24, 28, 25, 0.4)'
			}
		}
	}
});
