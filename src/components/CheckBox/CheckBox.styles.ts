import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { font } from 'styles';

const root: CreateCSSProperties = {
	'& .MuiTypography-root': {
		...font({
			fontWeight: 600,
			lineHeight: 1.67
		}),
		color: (props: any) => (props.checked ? '#181c19' : 'rgba(28, 24, 25, 0.5)')
	}
};

const checkBox: CSSProperties = {
	'&:hover': {
		backgroundColor: 'transparent'
	},
	color: 'rgba(28, 24, 25, 0.5)',
	'&$checked': {
		color: '#181c19'
	}
};

const checked: CSSProperties = {};

export const styles = createStyles({
	root,
	checkBox,
	checked
});
