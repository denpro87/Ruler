import { CreateCSSProperties, createStyles } from '@material-ui/styles';

const image: CreateCSSProperties = {
	imageRendering: 'optimizeQuality' as any,
	width: (props: any) => (props.width ? props.width : props.height || props.maxHeight ? 'auto' : undefined),
	height: (props: any) => (props.height ? props.height : props.width || props.maxWidth ? 'auto' : undefined),
	maxWidth: (props: any) => (props.maxWidth ? props.maxWidth : undefined),
	maxHeight: (props: any) => (props.maxHeight ? props.maxHeight : undefined)
};

export const styles = createStyles({
	image
});
