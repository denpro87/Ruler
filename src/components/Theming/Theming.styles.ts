import 'typeface-montserrat';
import 'typeface-roboto';
import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
	typography: {
		fontFamily: 'Montserrat'
	},
	palette: {
		background: {
			default: '#FFF'
		}
	},
	overrides: {
		MuiBackdrop: {
			root: {
				backgroundColor: 'rgba(24, 28, 25, 0.4)'
			}
		}
	}
});
