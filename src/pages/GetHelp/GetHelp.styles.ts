import { CSSProperties, createStyles } from '@material-ui/styles';
import { font, pxToRem } from 'styles';

const innerContent: CSSProperties = {
	textAlign: 'left'
};

const searchBox: CSSProperties = { marginTop: '25px', marginBottom: '25px' };
const subHeader: CSSProperties = {
<<<<<<< HEAD
  fontSize: '20px',
=======
  fontSize: '1.67rem',
>>>>>>> add get help and faq page
  fontWeight: 'bold',
  lineHeight: 1.5,
  marginLeft: 10,
  marginBottom: 15,
<<<<<<< HEAD
  marginTop: 16,
  color: '#181c19',
};
const menuItem: CSSProperties = {
  margin: '15px 10px -5px 10px',
  color: '#181c19',
  fontSize: 15
};
const subMenuItem: CSSProperties = { color: '#00b559', fontSize: '15px' };
const bigButton: CSSProperties = {
  margin: '20px 10px',
  backgroundColor: '#caf1dd',
  color: '#00b559',
  fontSize: 15,
  fontWeight: 'bold',
  lineHeight: 1.67,
  padding: '12px 0 13px 0',
  textTransform: 'capitalize',
  borderRadius: 15,
  height: 50
};
const menuItemUnderLine: CSSProperties = {
  backgroundColor: '#181c19',
  opacity: '5%',
  margin: '0 10px'
}
=======
  marginTop: 16
};
const subMenuItem: CSSProperties = { color: '#00b559' };
>>>>>>> add get help and faq page
export const styles = createStyles({
	innerContent,
  searchBox,
  subHeader,
<<<<<<< HEAD
  menuItem,
  subMenuItem,
  bigButton,
  menuItemUnderLine
=======
  subMenuItem
>>>>>>> add get help and faq page
});
