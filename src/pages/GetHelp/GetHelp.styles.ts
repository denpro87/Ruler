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
const menuItem: CSSProperties = {
  margin: '15px 10px 0 10px'
};
const subMenuItem: CSSProperties = { color: '#00b559' };
const bigButton: CSSProperties = {
  margin: '20px 10px',
  backgroundColor: '#caf1dd',
  color: '#00b559',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  lineHeight: 1.67,
  padding: '12px 0 13px 0',
  textTransform: 'capitalize',
  borderRadius: 15
};
export const styles = createStyles({
	innerContent,
  searchBox,
  subHeader,
  menuItem,
  subMenuItem,
  bigButton
});
