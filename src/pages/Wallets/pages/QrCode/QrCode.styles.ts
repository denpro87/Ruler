import { CSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';

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

export const styles = createStyles({
	qrCodeWrapper,
	shareButton
});
