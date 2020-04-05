import { CSSProperties, createStyles } from '@material-ui/styles';

import bgImg from './images/bg.svg';

const btnSection: CSSProperties = {};

const heading: CSSProperties = {
	margin: '30px auto',
	'& h1': {
		maxWidth: '160px',
		margin: '15px auto'
	}
};

const wrapper1: CSSProperties = {
	margin: '0 auto',
	minHeight: '237px',
	background: `url(${bgImg})`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'left bottom',
	position: 'relative'
};

const subtitle: CSSProperties = {
	maxWidth: '276px',
	margin: '10px auto 20px'
};

const loginButton: CSSProperties = {
	display: 'inline-block',
	marginLeft: '4px'
};

const createAccountButton: CSSProperties = {
	width: '265px',
	borderRadius: '15px',
	height: '50px'
};

const footer: CSSProperties = {
	marginTop: '48px'
};
export const styles = createStyles({
	heading,
	btnSection,
	wrapper1,
	goBack,
	createAccountButton,
	subtitle,
	footer,
	loginButton,
	wrapper
});
