import { CSSProperties, createStyles } from '@material-ui/styles';

const inputWrapper: CSSProperties = {
	width: '100%',
	height: '36px',
	borderRadius: '10px',
	position: 'relative',
	marginTop: '20px',
	marginBottom: '20px'
};

const eyeIcon: CSSProperties = {
	padding: 0
};

const inputRoot: CSSProperties = {
	color: 'inherit',
	width: '100%'
};

const inputInput: CSSProperties = {
	width: '100%',
	padding: '6px 10px 6px 40px',
	height: '25px'
};

export const styles = createStyles({
	eyeIcon,
	inputWrapper,
	inputRoot,
	inputInput
});
