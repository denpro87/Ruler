import { CSSProperties, createStyles } from '@material-ui/styles';
import { font, pxToRem } from 'styles';

const image: CSSProperties = {
	objectFit: 'cover',
	width: '100%'
};

const slide: CSSProperties = {
	'& img': {
		objectFit: 'cover',
		width: '100%',
		maxHeight: pxToRem(524)
		// height: 'calc(100vh * 293 / 667)'
	}
};

const title: CSSProperties = {
	paddingBottom: 10
};

const description: CSSProperties = {
	height: 100,
	marginBottom: 0,
	opacity: 0.5,
	...font({
		fontFamily: 'Montserrat',
		fontSize: 15,
		fontWeight: 600,
		fontStretch: 'normal',
		fontStyle: 'normal',
		lineHeight: 1.67,
		letterSpacing: 'normal',
		color: '#000000'
	})
};

const slideContainer: CSSProperties = {
	paddingTop: 27,
	paddingBottom: 20,
	height: '100%',
	width: '100%'
};

const slideContent: CSSProperties = {
	paddingLeft: 20,
	paddingRight: 20,
	paddingBottom: 28,
	paddingTop: 28,
	textAlign: 'left',
	marginTop: -5
};
export const styles = createStyles({
	image,
	slide,
	title,
	description,
	slideContainer,
	slideContent
});
