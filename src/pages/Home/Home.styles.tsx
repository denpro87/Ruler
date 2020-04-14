import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

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

const vehicleButton: CSSProperties = {
	position: 'absolute',
	bottom: pxToRem(30),
	left: pxToRem(20)
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
	boxShadow: '0 10px 40px 0 rgba(0, 0, 0, 0.1)',
	backgroundColor: '#ffffff',
	display: 'flex',
	alignItems: 'center'
};

const qrButton: CSSProperties = {
	width: pxToRem(72),
	height: pxToRem(72),
	border: `solid ${pxToRem(5)} #ffffff`,
	backgroundColor: '#00b559',
	boxShadow: 'none',
	margin: `0 ${pxToRem(6)}`
};

const menuButton: CSSProperties = {
	marginLeft: pxToRem(10)
};

const filterButton: CSSProperties = {
	marginRight: pxToRem(10)
};
export const styles = createStyles({
	reportButton,
	zonesButton,
	vehicleButton,
	findMeButton,
	homeButtons,
	qrButton,
	menuButton,
	filterButton
});
