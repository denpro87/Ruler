import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const providersList: CSSProperties = {
	padding: '0px',
	'& .MuiBox-root:first-child .MuiListItemText-root': {
		padding: `${pxToRem(30)} 0`
	},
	'& .MuiBox-root:last-child .MuiListItemText-root': {
		borderBottom: 'none'
	}
};

const searchBoxWrapper: CSSProperties = {
	padding: `${pxToRem(5)} ${pxToRem(20)} ${pxToRem(0)} ${pxToRem(20)}`
};
const searchBox: CSSProperties = {
	margin: 0
};
export const styles = createStyles({
	providersList,
	searchBoxWrapper,
	searchBox
});
