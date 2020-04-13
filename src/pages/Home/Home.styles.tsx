import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

export const mapViewer: CSSProperties = {
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0
};

const reportIcon: CSSProperties = {
	position: 'absolute',
	top: pxToRem(30),
	left: pxToRem(20)
};

const zonesIcon: CSSProperties = {
	position: 'absolute',
	top: pxToRem(30),
	right: pxToRem(20)
};

const vehicleIcon: CSSProperties = {
	position: 'absolute',
	bottom: pxToRem(30),
	left: pxToRem(20)
};

const findMeIcon: CSSProperties = {
	position: 'absolute',
	bottom: pxToRem(30),
	right: pxToRem(20)
};

export const styles = createStyles({
	reportIcon,
	zonesIcon,
	vehicleIcon,
	findMeIcon
});
