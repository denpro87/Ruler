import { CSSProperties, createStyles } from '@material-ui/styles';

const innerContent: CSSProperties = {
	textAlign: 'left'
};

const searchBox: CSSProperties = { marginTop: '25px', marginBottom: '25px' };
const subHeader: CSSProperties = {
  fontSize: '20px',
  fontWeight: 'bold',
  lineHeight: 1.5,
  marginLeft: 0,
  marginBottom: 15,
  marginTop: 16,
  color: '#181c19',
};
const menuItem: CSSProperties = {
  margin: '15px 0px -5px 0px !important',
  color: '#181c19',
  fontWeight: 600,
  fontSize: 15
};
const subMenuItem: CSSProperties = {
  color: '#00b559',
  fontSize: '15px',
  fontWeight: 600,
  marginLeft: '0 !important'
};
const buttonWrapper: CSSProperties = {
  paddingBottom: 5,
  display: 'flex',
  flexDirection: 'column'
};
const bigButton: CSSProperties = {
  marginBottom: 15,
  backgroundColor: '#caf1dd',
  color: '#00b559',
  fontSize: 15,
  fontWeight: 'bold',
  lineHeight: 1.67,
  padding: '12px 0 13px 0',
  textTransform: 'none',
  borderRadius: 15,
  height: 50,
  flex: 1
};
const greenText: CSSProperties = {
  color: '#00b559'
}
const menuItemUnderLine: CSSProperties = {
  backgroundColor: '#181c19',
  opacity: '5%'
};
const li: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  margin: '27px 0 0 0',
	'& h6': {
		width: '100%',
    marginLeft: '10px',
    color: '#181c19',
    fontWeight: 600,
    fontSize: 15
	},
	'& img': {
		width: '30px',
		height: '30px'
	}
};
const content: CSSProperties = {
  fontSize: 15,
  fontFamily: 'Montserrat',
  opacity: 0.5,
  lineHeight: 1.67,
  fontWeight: 600,
  marginTop: 5
};
const buttonIcon: CSSProperties = {
  position: 'absolute',
  left: 15
};
const faqFooter: CSSProperties = {
  display: 'flex',
  marginBottom: 23,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
};
const faqContentItem: CSSProperties = {
  display: 'flex',
  marginTop: 10
};
const faqLi: CSSProperties = {
  marginRight: 9
};
const subTitle: CSSProperties = {
  margin: '20px 0 5px 0',
  color: '#181c19',
  fontWeight: 600,
  fontSize: 15
}
export const styles = createStyles({
	innerContent,
  searchBox,
  subHeader,
  menuItem,
  subMenuItem,
  buttonWrapper,
  bigButton,
  menuItemUnderLine,
  content,
  li,
  buttonIcon,
  faqFooter,
  faqLi,
  faqContentItem,
  greenText,
  subTitle
});
