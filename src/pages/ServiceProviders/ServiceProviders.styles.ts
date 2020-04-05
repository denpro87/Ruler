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

export const styles = createStyles({
	providersList,
	innerContent,
	wrapper
});
