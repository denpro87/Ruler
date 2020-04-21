import { CSSProperties } from '@material-ui/styles';
import { DATE_TIME_PICKER_COLUMNS_HEIGHT, DATE_TIME_PICKER_OPTION_HEIGHT } from './DateTimePicker.variables';
import { DEFAULT_FONT_FAMILY, pxToRem } from 'styles';
import { createStyles } from '@material-ui/core';

const picker: CSSProperties = {
	zIndex: 20002,
	display: 'flex',
	flexDirection: 'column',
	position: 'absolute',
	top: 0,
	right: 0,
	left: 0,
	bottom: 0,
	width: '100%',
	height: '100%',
	userSelect: 'none',
	contain: 'strict'
};

const pickerWrapper: CSSProperties = {
	width: '100%',
	marginTop: 'auto',
	padding: `${pxToRem(15)} ${pxToRem(20)} ${pxToRem(19)}`,
	display: 'flex',
	flexDirection: 'column',
	overflow: 'hidden',
	zIndex: 10,
	backgroundColor: '#fff',
	borderTopLeftRadius: pxToRem(15),
	borderTopRightRadius: pxToRem(15),
	boxSizing: 'border-box'
};

const pickerColumns: CSSProperties = {
	height: pxToRem(DATE_TIME_PICKER_COLUMNS_HEIGHT),
	marginTop: pxToRem(30),
	marginBottom: pxToRem(30),
	perspective: 1000,
	display: 'flex',
	position: 'relative',
	justifyContent: 'center',
	direction: 'ltr',
	overflow: 'hidden',
	boxSizing: 'border-box'
};

const pickerHighlight: CSSProperties = {
	position: 'absolute',
	left: 0,
	right: 0,
	width: '100%',
	height: pxToRem((DATE_TIME_PICKER_COLUMNS_HEIGHT - DATE_TIME_PICKER_OPTION_HEIGHT) / 2),
	display: 'block',
	pointerEvents: 'none',
	boxSizing: 'border-box',
	zIndex: 10
};

const pickerAboveHighlight: CSSProperties = {
	top: 0,
	borderBottom: `${pxToRem(1)} solid rgba(24, 28, 25, 0.05)`,
	background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.65), transparent)'
};

const pickerBelowHighlight: CSSProperties = {
	bottom: 0,
	borderTop: `${pxToRem(1)} solid rgba(24, 28, 25, 0.05)`,
	background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.65), transparent)'
};

const pickerColumn: CSSProperties = {
	flex: 'unset',
	padding: 0,
	'& .picker-opts': {
		top: '50%',
		transform: `translateY(${pxToRem(-DATE_TIME_PICKER_OPTION_HEIGHT / 2)})`,
		width: pxToRem(70),
		'& .picker-opt': {
			height: pxToRem(DATE_TIME_PICKER_OPTION_HEIGHT),
			fontFamily: DEFAULT_FONT_FAMILY,
			fontSize: pxToRem(20),
			fontWeight: 600,
			lineHeight: 1.5,
			color: 'rgba(24, 28, 25)'
		},
		'& .picker-opt-selected': {
			color: 'rgb(24, 28, 25)'
		}
	}
};

const backdrop: CSSProperties = {
	opacity: '0.4',
	backgroundColor: '#181c19'
};

const blackBar: CSSProperties = {
	width: pxToRem(37),
	height: pxToRem(4),
	marginLeft: 'auto',
	marginRight: 'auto',
	borderRadius: 9999,
	background: '#181c19'
};

export const styles = createStyles({
	picker,
	pickerWrapper,
	pickerColumns,
	pickerHighlight,
	pickerAboveHighlight,
	pickerBelowHighlight,
	pickerColumn,
	backdrop,
	blackBar
});
