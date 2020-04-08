import { CreateCSSProperties, createStyles } from '@material-ui/styles';

const image: CreateCSSProperties = {
	maxWidth: (props: any) => (props.responsive ? '100%' : undefined),
	height: (props: any) => (props.responsive ? 'auto' : undefined)
};

export const styles = createStyles({
	image
});
