import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { font, pxToRem } from 'styles';

const content: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	padding: `${pxToRem(25)} ${pxToRem(30)} ${pxToRem(15)} ${pxToRem(30)}`
};

const contentWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	paddingTop: pxToRem(20)
};

const rowWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	flex: 1,
	paddingLeft: pxToRem(15),
	overflow: 'hidden'
};

const textWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	overflow: 'hidden'
};

const smallText: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.5,
		color: 'rgba(24, 28, 25, 0.5)'
	}),
	fontSize: pxToRem(10),
	'&.MuiTypography-root': {
		whiteSpace: 'nowrap'
	}
};

const text: CSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67,
		color: '#181c19'
	}),
	fontSize: pxToRem(15),
	padding: `${pxToRem(2)} 0`
};

const amountText: CreateCSSProperties = {
	...font({
		fontWeight: 600,
		lineHeight: 1.67
	}),
	fontSize: pxToRem(15),
	color: (props: any) => (props.type === 'send' ? '#00b559' : '#f46c63'),
	'&.MuiTypography-root': {
		whiteSpace: 'nowrap',
		overflow: 'visible'
	}
};

export const styles = createStyles({
	content,
	contentWrapper,
	rowWrapper,
	textWrapper,
	smallText,
	text,
	amountText
});
