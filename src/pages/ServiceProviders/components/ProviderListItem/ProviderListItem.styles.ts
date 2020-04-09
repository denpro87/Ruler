import { CSSProperties } from '@material-ui/styles';
import { createStyles } from '@material-ui/core';
import { font, pxToRem } from 'styles';

const providerListItem: CSSProperties = {
	padding: `${pxToRem(10)} 0`
};

const iconContainer: CSSProperties = {
	alignSelf: 'start'
};

const providerIconContainer: CSSProperties = {
	minWidth: pxToRem(40)
};

const providerIcon: CSSProperties = {
	marginRight: 'auto',
	padding: pxToRem(5),
	boxSizing: 'content-box'
};

const providerTextContainer: CSSProperties = {
	marginTop: 0,
	marginBottom: 0
};

const providerText: CSSProperties = {
	marginBottom: pxToRem(5),
	...font({
		fontSize: 20,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.5,
		letterSpacing: 'normal',
		color: '#181c19'
	})
};

const providerSubtext: CSSProperties = {
	...font({
		fontSize: 15,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.67,
		letterSpacing: 'normal',
		color: 'rgba(24, 28, 25, 0.5)'
	})
};

const goToIcon: CSSProperties = {
	marginLeft: 'auto'
};
export const styles = createStyles({
	iconContainer,
	providerListItem,
	providerIconContainer,
	providerIcon,
	providerTextContainer,
	providerText,
	providerSubtext,
	goToIcon
});
