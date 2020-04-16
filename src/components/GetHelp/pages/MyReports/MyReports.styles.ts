import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const myReportContainer: CSSProperties = {
	height: `calc(100vh - ${pxToRem(145)})`,
	overflow: 'auto',
	borderBottomLeftRadius: pxToRem(15),
	borderBottomRightRadius: pxToRem(15)
};

export const styles = createStyles({
	myReportContainer
});
