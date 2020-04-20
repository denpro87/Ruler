import { CSSProperties, CreateCSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';

const body: CreateCSSProperties = {
	width: '100%',
	borderTopLeftRadius: pxToRem(15),
	borderTopRightRadius: pxToRem(15),
	marginTop: (props: any) => (props.open ? `calc(100vh - ${pxToRem(320)}` : '100vh'),
	transition: 'margin-top 400ms cubic-bezier(0.4, 0, 0.2, 1)',
	height: pxToRem(320)
};

const content: CSSProperties = {
	height: '100%',
	overflow: 'hidden'
};

const sheetWrapper: CSSProperties = {
	padding: `${pxToRem(15)} ${pxToRem(20)} ${pxToRem(0)} ${pxToRem(25)}`,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	height: '100%'
};

const blackBar: CSSProperties = {
	width: pxToRem(37),
	height: pxToRem(4),
	borderRadius: pxToRem(5),
	background: '#181c19'
};

const pickerColumnWrapper: CSSProperties = {
	display: 'flex',
	width: '100%',
	height: '100%',
	position: 'relative',
	flexDirection: 'row',
	justifyContent: 'center',
	padding: `${pxToRem(30)} 0 0 0`,
	'& .picker-col': {
		flex: 'unset',
		padding: 0,
		'& .picker-opts': {
			width: pxToRem(60),
			'& .picker-opt': {
				height: pxToRem(38),
				fontFamily: DEFAULT_FONT_FAMILY,
				fontSize: pxToRem(18),
				fontWeight: 600,
				lineHeight: 1.5,
				color: '#181c19',
				opacity: 0.35
			},
			'& .picker-opt-selected': {
				opacity: 1,
				fontSize: pxToRem(20)
			}
		}
	}
};

const selectedRow: CSSProperties = {
	position: 'absolute',
	left: 0,
	top: pxToRem(105.76),
	width: '100%',
	height: 38,
	borderTop: '1px solid rgba(24, 28, 25, 0.05)',
	borderBottom: '1px solid rgba(24, 28, 25, 0.05)'
};

const buttonWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	marginBottom: pxToRem(30),
	width: '100%'
};

const button: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	height: pxToRem(50),
	fontWeight: 'bold',
	'&:first-child': {
		marginRight: pxToRem(7.5)
	},
	'&:last-child': {
		marginLeft: pxToRem(7.5)
	}
};

export const styles = createStyles({
	body,
	content,
	sheetWrapper,
	blackBar,
	pickerColumnWrapper,
	buttonWrapper,
	button,
	selectedRow
});
