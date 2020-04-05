import { CSSProperties, createStyles } from '@material-ui/styles';

const providersList: CSSProperties = {
	marginTop: '25px'
};

const wrapper: CSSProperties = {
	background: 'white',
	textAlign: 'center',
	maxWidth: '768px',
	margin: '0 auto',
	width: '100%',
	height: '100%'
};

const innerContent: CSSProperties = {
	padding: '80px 20px 30px',
	textAlign: 'left'
};

const logOutAction: CSSProperties = {
	display: 'block',
	padding: '0',
	borderTop: '2px solid #eee',
	'& button': {
		width: '100%',
		display: 'block',
		margin: '0 auto',
		padding: '10px'
	}
};

const dialogTitle: CSSProperties = {
	paddingTop: '20px',
	paddingBottom: '5px'
};

const logOutActionSpacing: CSSProperties = {
	'& > :not(:first-child)': {
		borderTop: '2px solid #eee',
		marginLeft: 0
	}
};

const logoutContent: CSSProperties = {
	padding: '0px 60px 20px'
};

const logoutDialog: CSSProperties = {
	boxShadow: 'none',
	borderRadius: '15px',
	color: 'black',
	textAlign: 'center',
	width: '270px'
};

const deleteAccountDialog: CSSProperties = {
	boxShadow: 'none',
	borderRadius: '15px',
	color: 'black',
	textAlign: 'center',
	width: '270px',
	'& .MuiDialogContent-root': {
		padding: '0px 16px 20px',
		'& span': {
			display: 'inline-block',
			padding: '0 12px'
		}
	}
};

const deleteAccountAction: CSSProperties = {
	padding: '0',
	borderTop: '2px solid #dddddd',
	'& button': {
		width: '100%',
		padding: '10px',
		borderRadius: 0
	},
	'& > :not(:first-child)': {
		borderLeft: '2px solid #dddddd',
		marginLeft: 0
	}
};

const emailRoot: CSSProperties = {
	'& input': {
		padding: '5px',
		caretColor: '#00b559',
		borderRadius: '5px'
	},
	'& .MuiOutlinedInput-root': {
		borderRadius: '5px'
	},
	'& .MuiOutlinedInput-root.Mui-focused fieldset': {
		border: '0.5px solid #181c19'
	}
};

const emailInput: CSSProperties = {};

const notRecommendedButton: CSSProperties = {
	fontWeight: 600
};

const footer: CSSProperties = {
	position: 'absolute',
	bottom: '0px',
	padding: '0 20px',
	width: '100%',
	textAlign: 'left'
};

export const styles = createStyles({
	providersList,
	innerContent,
	logOutActionSpacing,
	logoutContent,
	footer,
	dialogTitle,
	deleteAccountAction,
	deleteAccountDialog,
	emailRoot,
	emailInput,
	logOutAction,
	logoutDialog,
	notRecommendedButton,
	wrapper
});
