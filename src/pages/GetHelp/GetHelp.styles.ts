import { CSSProperties, createStyles } from '@material-ui/styles';
import { font, pxToRem } from 'styles';

const innerContent: CSSProperties = {
	textAlign: 'left'
};

const searchBox: CSSProperties = { marginTop: '25px', marginBottom: '25px' };
const subHeader: CSSProperties = {
  fontSize: '1.67rem',
  fontWeight: 'bold',
  lineHeight: 1.5,
  marginLeft: 10,
  marginBottom: 15,
  marginTop: 16
};
const subMenuItem: CSSProperties = { color: '#00b559' };
export const styles = createStyles({
	innerContent,
  searchBox,
  subHeader,
  subMenuItem
});
