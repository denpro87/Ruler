import { CSSProperties, createStyles } from '@material-ui/styles';
import { font } from 'styles';
const providersList: CSSProperties = {
	marginTop: '15px',
	padding: '0px'
};

const innerContent: CSSProperties = {
	textAlign: 'left'
};

const sectionBreaker: CSSProperties = {
	opacity: 0.5,
	...font({
		fontSize: 10,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.5,
		letterSpacing: 'normal'
	})
};

export const styles = createStyles({
	providersList,
	sectionBreaker,
	innerContent
});
