import { CSSProperties, createStyles } from '@material-ui/styles';

const heading: CSSProperties = {
	margin: '20px auto',
	width: '100%',
	textAlign: 'left',
	'& h4': {
		fontSize: '24px',
		fontWeight: 'bold'
	}
};

const openBrowser: CSSProperties = {
	fontSize: '15px',
	lineHeight: '25px',
	fontWeight: 'bold',
	color: '#00b559',
	position: 'absolute',
	bottom: 0,
	right: 0
};

const wrapper1: CSSProperties = {
	margin: '0 auto',
	minHeight: '50px',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'left bottom',
	position: 'relative',
	textAlign: 'right',

	'& h6': {
		color: 'green'
	}
};

const imageContainer: CSSProperties = {
	height: '150px',
	borderRadius: '20px',
	overflow: 'hidden',
	marginTop: '10px',
	border: 'solid 1px #80808080'
};

const image: CSSProperties = {
	width: '100%',
	height: '100%',
	objectFit: 'cover'
};

const title: CSSProperties = {
	marginTop: '20px',
	fontSize: '25px',
	lineHeight: '35px',
	fontWeight: 'bold'
};

const description: CSSProperties = {
	marginTop: '20px',
	fontSize: '15px',
	color: '#181c197f',
	fontWeight: 'bold',
	lineHeight: '25px'
};

const footer: CSSProperties = {
	position: 'absolute',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginTop: '20px',
	width: 'calc(100% - 40px)',
	bottom: '23px'
};

const icon: CSSProperties = {
	width: '20px',
	height: '20px',
	marginRight: '10px'
};

const social: CSSProperties = {
	marginRight: '20px',
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	fontSize: '15px',
	lineHeight: '25px',
	fontWeight: 'bold'
};

const date: CSSProperties = {
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
	fontSize: '15px',
	lineHeight: '25px',
	textAlign: 'right',
	fontWeight: 'bold'
};

const scheduleIcon: CSSProperties = {
	paddingRight: '10px'
};

export const styles = createStyles({
	heading,
	wrapper1,
	openBrowser,
	imageContainer,
	image,
	title,
	description,
	icon,
	date,
	schedulIcon: scheduleIcon,
	footer,
	social
});
