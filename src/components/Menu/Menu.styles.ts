import { CSSProperties, createStyles } from '@material-ui/styles';

const footer: CSSProperties = {
	position: 'absolute',
	bottom: '0px',
	width: '100%'
};

const notificationWrapper: CSSProperties = {
	position: 'absolute',
	top: '0px',
	right: '0px'
};

const menu: CSSProperties = {
	position: 'relative',
	width: '100%',
	height: '100%'
};

const createAccountButton: CSSProperties = {
	width: '100%',
	borderRadius: '15px',
	height: '50px'
};

const notificationButton: CSSProperties = {
	width: '50px',
	background: 'white',
	minWidth: '50px',
	borderRadius: '15px',
	boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.07)',
	height: '50px'
};

const sidebarWrapper: CSSProperties = {
	'& .MuiDrawer-paper': {
		maxWidth: '291px',
		width: '100%',
		padding: '40px 20px 20px',
		background: 'white',
		boxSizing: 'border-box',
		borderTopRightRadius: '15px',
		borderBottomRightRadius: '15px'
	}
};

export const styles = createStyles({
	footer,
	menu,
	createAccountButton,
	notificationButton,
	notificationWrapper,
	sidebarWrapper
});
