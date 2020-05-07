import { CSSProperties, createStyles } from '@material-ui/styles';
import { percentage, pxToRem } from 'styles';

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
	rateImageWrapper
});
