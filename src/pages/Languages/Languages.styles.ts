import { CSSProperties, createStyles } from '@material-ui/styles';

const providersList: CSSProperties = {
	padding: '0px',
	'& .MuiBox-root:last-child hr': {
		display: 'none'
	}
};

const wrapper: CSSProperties = {
	background: 'white',
	textAlign: 'center',
	margin: '0 auto',
	width: '100%',
	height: '100%',
	'& hr': {
		opacity: 0.05,
		backgroundColor: '#181c19'
	}
};

const innerContent: CSSProperties = {
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
