import { CSSProperties, createStyles } from '@material-ui/styles';

const providersList: CSSProperties = {
	marginTop: '15px',
	padding: '0px'
};

const innerContent: CSSProperties = {
	textAlign: 'left'
};

const saveBtn: CSSProperties = {
	marginTop: '10px'
};

export const styles = createStyles({
	providersList,
	saveBtn,
	innerContent
});
