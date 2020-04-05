import { CSSProperties, createStyles } from '@material-ui/styles';

const providersList: CSSProperties = {
	marginTop: '15px',
	padding: '0px'
};

const li: CSSProperties = {
	padding: 0
};

const timePicker: CSSProperties = {
	position: 'absolute',
	right: '0',
	'& .MuiInputBase-input': {
		maxWidth: '50px',
		textAlign: 'right'
	},
	'& .MuiInputAdornment-positionEnd': {
		marginLeft: 0
	},
	'& button': {
		width: '30px',
		height: '30px',
		padding: 0
	}
};

const ionItem: CSSProperties = {
	width: '100%',
	'--padding-start': '0px',
	backgroundColor: 'transparent',
	'--highlight-color-focused': 'transparent',
	'--ripple-color': 'transparent',
	'--background-activated': 'transparent',
	'--background-focused': 'transparent',
	'--background-hover': 'transparent',
	' --highlight-color-valid': 'transparent',
	'--highlight-color-invalid': 'transparent',
	'--background-activated-opacity': '0',
	'--transition': 'none',
	'--highlight-height': '0px',
	'& .item-native': {
		paddingLeft: 0
	},
	'& ion-datetime': {
		position: 'absolute',
		right: 0,
		paddingRight: '30px',
		width: '100%',
		textAlign: 'right'
	},
	'& svg': {
		position: 'absolute',
		right: 0
	}
};

const customPicker: CSSProperties = {
	'& .picker-wrapper': {
		display: 'flex',
		flexDirection: 'column-reverse',
		borderRadius: '14px',
		'& .picker-toolbar-button': {}
	}
};

export const styles = createStyles({
	providersList,
	li,
	timePicker,
	customPicker,
	ionItem
});
