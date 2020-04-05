import { CSSProperties, createStyles } from '@material-ui/styles';

const providersList: CSSProperties = {
	padding: '0px'
};

const wrapper: CSSProperties = {
	background: 'white',
	textAlign: 'center',
	maxWidth: '768px',
	margin: '0 auto',
	width: '100%',
	height: '100%',
	'& hr': {
		opacity: 0.05,
		backgroundColor: '#181c19'
	}
};

const innerContent: CSSProperties = {
	padding: '80px 20px 30px',
	textAlign: 'left'
};

const selectedList: CSSProperties = {
	padding: 0,
	'& hr': {
		marginTop: '20px'
	}
};

const searchBox: CSSProperties = { marginTop: '25px', marginBottom: '25px' };

export const styles = createStyles({
	providersList,
	innerContent,
	selectedList,
	searchBox,
	wrapper
});
