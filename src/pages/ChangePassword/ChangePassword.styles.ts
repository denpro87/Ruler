import { CSSProperties, createStyles } from '@material-ui/styles';

const providersList: CSSProperties = {
	marginTop: '15px',
	padding: '0px'
};

const innerContent: CSSProperties = {
	paddingTop: '30px',
	textAlign: 'left'
};

export const styles = createStyles({
	providersList,
	innerContent
});
