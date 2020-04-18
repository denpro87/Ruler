import { CSSProperties, createStyles } from '@material-ui/styles';

const inputWrapper: CSSProperties = {
	width: '100%',
	height: '36px',
	borderRadius: '10px',
	backgroundColor: '#f3f3f3',
	position: 'relative',
	marginTop: '20px',
	marginBottom: '20px'
};

const searchIcon: CSSProperties = {
	height: '100%',
	position: 'absolute',
	left: '6px',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
};

const inputRoot: CSSProperties = {
	color: 'inherit',
	width: '100%',
	fontWeight: 600
};

const inputInput: CSSProperties = {
	width: '100%',
	padding: '6px 10px 6px 40px',
	height: '25px'
};

export const styles = createStyles({
	searchIcon,
	inputWrapper,
	inputRoot,
	inputInput
});
