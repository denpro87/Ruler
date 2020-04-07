import { CSSProperties, createStyles } from '@material-ui/styles';

const heading: CSSProperties = {
	margin: '20px auto',
	width: '100%',
	textAlign: 'left',
	'& h4': {
		fontSize: '32px',
		fontWeight: 'bold',
		lineHeight: '48px',
		fontFamily: 'Montserrat',
		color: '#181c19'
	}
};

const wrapper1: CSSProperties = {
	margin: '0 auto',
	minHeight: '50px',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'left bottom',
	position: 'relative'
};

const newsList: CSSProperties = {
	padding: 0
};

const newItem: CSSProperties = {
	padding: '20px 0'
};

const newsContainer: CSSProperties = {
	height: '75vh',
	overflow: 'scroll'
};

export const styles = createStyles({
	heading,
	wrapper1,
	newsList,
	newItem,
	newsContainer
});
