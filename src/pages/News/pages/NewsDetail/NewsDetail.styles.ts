import { CSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const vehicleImage: CSSProperties = {
	width: '100%',
	paddingBottom: pxToRem(20)
};
const title: CSSProperties = {
	paddingBottom: pxToRem(15)
};
const titleTxt: CSSProperties = {
	...font({
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.4,
		letterSpacing: 'normal',
		color: '#181c19'
	}),
	fontSize: pxToRem(25)
};
const descriptionTxt: CSSProperties = {
	...font({
		fontFamily: 'Montserrat',
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.67,
		letterSpacing: 'normal',
		color: '#181c19'
	}),
	opacity: 0.5,
	fontSize: pxToRem(15)
};
const detailContainer: CSSProperties = {
	flex: 1
};
export const styles = createStyles({
	vehicleImage,
	title,
	titleTxt,
	descriptionTxt,
	detailContainer
});
