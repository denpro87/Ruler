import { CreateCSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const imageContainer: CreateCSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexGrow: 0,
	flexShrink: 0,
	flexBasis: (props: any) => (props.width ? pxToRem(props.width) : props.width),
	width: (props: any) => (props.width ? pxToRem(props.width) : props.width),
	height: (props: any) => (props.height ? pxToRem(props.height) : props.height),
	maxWidth: (props: any) => (props.maxWidth ? pxToRem(props.maxWidth) : props.maxWidth),
	maxHeight: (props: any) => (props.maxHeight ? pxToRem(props.maxHeight) : props.maxHeight),
	backgroundColor: (props: any) => (props.rounded ? 'rgba(0, 0, 0, 0.01)' : undefined),
	borderRadius: (props: any) => (props.rounded ? pxToRem(15) : undefined)
};

const image: CreateCSSProperties = {
	imageRendering: 'optimizeQuality' as any,
	height: 'auto',
	maxWidth: '100%',
	objectFit: 'contain',
	borderRadius: (props: any) => (props.rounded ? pxToRem(15) : undefined)
};

export const styles = createStyles({
	image,
	imageContainer
});
