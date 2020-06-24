import { CSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { pxToRem } from 'styles';

const qrCodeWrapper: CSSProperties = {
	display: 'flex',
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center'
};

const shareButton: CSSProperties = {
	marginTop: 'auto',
	fontWeight: 'bold'
};

const shareImage: CSSProperties = {
	width: pxToRem(220),
	height: pxToRem(220),
	objectFit: 'cover'
};
export const styles = createStyles({
	qrCodeWrapper,
	shareButton,
	shareImage
});
