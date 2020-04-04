import { CSSProperties, createStyles } from '@material-ui/styles';

const root: CSSProperties = {
	backgroundColor: 'black'
};

const headerImage: CSSProperties = {
	position: 'fixed',
	zIndex: 1,
	right: '33px',
	maxWidth: '105px',
	top: '-40px'
};

const footerImage: CSSProperties = {
	position: 'fixed',
	zIndex: 1,
	left: '33px',
	maxWidth: '180px',
	bottom: '-70px'
};

const logo: CSSProperties = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	zIndex: 2,
	transform: 'translate(-50%, -50%)'
};

const wrapper: CSSProperties = {
	padding: '20px',
	background: '#000000',
	textAlign: 'center',
	width: '100%',
	height: '100%'
};

const wrapper1: CSSProperties = {
	maxWidth: '400px',
	margin: '0 auto',
	height: '100%',
	position: 'relative'
};

export const styles = createStyles({
	root,
	headerImage,
	footerImage,
	logo,
	wrapper,
	wrapper1
});
