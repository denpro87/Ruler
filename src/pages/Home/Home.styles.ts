import { CSSProperties, createStyles } from '@material-ui/styles';
import { DEFAULT_FONT_FAMILY, percentage, pxToRem } from 'styles';

export const mapViewer: CSSProperties = {
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0
};

const reportButton: CSSProperties = {
	position: 'absolute',
	top: pxToRem(30),
	left: pxToRem(20)
};

const zonesButton: CSSProperties = {
	position: 'absolute',
	top: pxToRem(30),
	right: pxToRem(20)
};

const vehicleButtonGroup: CSSProperties = {
	position: 'absolute',
	bottom: pxToRem(30),
	left: pxToRem(20)
};

const vehicleButtonGroupWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	borderRadius: pxToRem(15),
	backgroundColor: 'rgb(255, 255, 255)',
	boxShadow: `0 ${pxToRem(10)} ${pxToRem(40)} 0 rgba(0, 0, 0, 0.1)`
};

const findMeButton: CSSProperties = {
	position: 'absolute',
	bottom: pxToRem(30),
	right: pxToRem(20)
};

const homeButtons: CSSProperties = {
	position: 'absolute',
	bottom: pxToRem(30),
	left: '50%',
	transform: 'translate(-50%, 0%)',
	height: pxToRem(50),
	borderRadius: pxToRem(15),
	boxShadow: `0 ${pxToRem(10)} ${pxToRem(40)} 0 rgba(0, 0, 0, 0.1)`,
	backgroundColor: 'rgb(255, 255, 255)',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
};

const homeButtonsText: CSSProperties = {
	position: 'absolute',
	bottom: pxToRem(8),
	left: '50%',
	transform: 'translate(-50%, 0%)',
	minWidth: pxToRem(185),
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	padding: `${pxToRem(7)} ${pxToRem(10)} 0 ${pxToRem(10)}`
};

const qrButton: CSSProperties = {
	width: pxToRem(72),
	height: pxToRem(72),
	border: `solid ${pxToRem(5)} #ffffff`,
	backgroundColor: '#00b559',
	boxShadow: 'none',
	margin: `0 ${pxToRem(6)} 0 ${pxToRem(7)}`
};

const menuButton: CSSProperties = {
	marginLeft: pxToRem(10)
};

const filterButton: CSSProperties = {
	marginRight: pxToRem(10)
};

const firstIconButton: CSSProperties = {
	padding: `${pxToRem(8)} ${pxToRem(10)} 0 ${pxToRem(10)}`
};

const lastIconButton: CSSProperties = {
	padding: `${pxToRem(10)}`
};

const midIconButton: CSSProperties = {
	padding: `${pxToRem(7)} ${pxToRem(10)} 0 ${pxToRem(10)}`
};

const vehicleIconButton: CSSProperties = {
	boxShadow: `0 ${pxToRem(10)} ${pxToRem(40)} 0 rgba(0, 0, 0, 0.1)`
};

const iconButtonText: CSSProperties = {
	minWidth: pxToRem(50),
	textAlign: 'center',
	fontSize: pxToRem(10),
	color: '#181c19',
	fontWeight: 600,
	lineHeight: 1.5,
	opacity: 0.5
};

const positionVehicleText: CSSProperties = {
	position: 'absolute',
	bottom: pxToRem(8),
	left: pxToRem(20)
};

const positionLocationText: CSSProperties = {
	position: 'absolute',
	bottom: pxToRem(8),
	right: pxToRem(20)
};

const dialogContentText: CSSProperties = {
	fontSize: pxToRem(10),
	fontWeight: 600,
	lineHeight: 1.5,
	color: 'rgba(24, 28, 25, 0.5)',
	padding: `${pxToRem(10)} 0 0 0`
};

const rateImage: CSSProperties = {
	width: percentage(1),
	height: percentage(1),
	objectFit: 'cover'
};

const rateImageWrapper: CSSProperties = {
	padding: `${pxToRem(15)} ${pxToRem(50)} 0 ${pxToRem(50)}`
};

const shareButton: CSSProperties = {
	margin: `${pxToRem(20)} 0 ${pxToRem(15)} 0 `
};

const sheetButton: CSSProperties = {
	marginBottom: pxToRem(15),
	fontWeight: 'bold'
};

const sheetText: CSSProperties = {
	fontFamily: DEFAULT_FONT_FAMILY,
	fontSize: pxToRem(15),
	fontWeight: 600,
	lineHeight: 1.67,
	color: '#181c19',
	opacity: 0.5,
	padding: `0 0 ${pxToRem(20)} 0`
};
const buttonGroupWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	backgroundColor: 'rgba(255, 255, 255, 0.05)',
	padding: `${pxToRem(24)} 0 ${pxToRem(30)} 0`
};

const button: CSSProperties = {
	padding: `${pxToRem(4)} 0`,
	'& .MuiButton-label > span': {
		padding: 0,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	'& .MuiButton-label:after': {
		content: '""',
		width: 0,
		height: 0,
		flex: 'unset'
	},
	'&:active': {
		backgroundColor: '#f8ca06'
	},
	'&:hover': {
		backgroundColor: '#f8ca06'
	}
};

const activeBackground: CSSProperties = {
	backgroundColor: '#f8ca06'
};

const inActiveBackground: CSSProperties = {
	backgroundColor: '#ffffff'
};

const smallText: CSSProperties = {
	fontWeight: 600,
	lineHeight: 1.5,
	color: 'rgba(24, 28, 25, 0.5)',
	fontSize: pxToRem(10)
};
const areasList: CSSProperties = {
	padding: ` 0 0 ${pxToRem(30)} 0`
};

const filterList: CSSProperties = {
	paddingTop: pxToRem(10),
	paddingBottom: 0
};

const batteryLevelText: CSSProperties = {
	paddingTop: pxToRem(25)
};

const engineTypeText: CSSProperties = {
	paddingTop: pxToRem(35),
	paddingBottom: pxToRem(14)
};

const resetButton: CSSProperties = {
	backgroundColor: '#ffffff',
	fontSize: pxToRem(15),
	color: '#00b559',
	fontWeight: 'bold',
	lineHeight: 1.67,
	padding: `${pxToRem(12)} 0 ${pxToRem(13)} 0`,
	textTransform: 'none',
	margin: `${pxToRem(22)} 0`,
	borderRadius: pxToRem(15),
	'&:hover': {
		color: '#00b559',
		backgroundColor: 'rgba(0, 0, 0, 0.04)'
	}
};

export const styles = createStyles({
	reportButton,
	zonesButton,
	vehicleButtonGroup,
	findMeButton,
	homeButtons,
	qrButton,
	menuButton,
	filterButton,
	vehicleButtonGroupWrapper,
	firstIconButton,
	lastIconButton,
	midIconButton,
	vehicleIconButton,
	iconButtonText,
	positionVehicleText,
	positionLocationText,
	homeButtonsText,
	dialogContentText,
	rateImage,
	rateImageWrapper,
	shareButton,
	sheetButton,
	sheetText,
	areasList,
	button,
	activeBackground,
	buttonGroupWrapper,
	inActiveBackground,
	smallText,
	filterList,
	batteryLevelText,
	engineTypeText,
	resetButton
});
