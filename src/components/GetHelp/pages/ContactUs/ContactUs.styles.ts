import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem, DEFAULT_FONT_FAMILY } from 'styles';

const container: CSSProperties = {
	flex: 1,
	'& > :last-child': {
		paddingLeft: pxToRem(40)
	}
};
const buttonWrapper: CSSProperties = {
  paddingBottom: pxToRem(5),
  display: 'flex',
  flexDirection: 'column'
};
const bigButton: CSSProperties = {
  marginBottom: pxToRem(15),
  backgroundColor: '#caf1dd',
  color: '#00b559',
  fontSize: pxToRem(15),
  fontWeight: 'bold',
  lineHeight: 1.67,
  padding: `${pxToRem(12)} 0 ${pxToRem(12)} 0`,
  textTransform: 'none',
  borderRadius: pxToRem(15),
  height: pxToRem(50),
  flex: 1
};
const li: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  margin: `${pxToRem(27)} 0 0 0`,
  '&:first-child' : {
    marginTop: pxToRem(17)
  },
	'& h6': {
		width: '100%',
    marginLeft: pxToRem(10),
    color: '#181c19',
    fontWeight: 600,
    fontSize: pxToRem(15)
	},
	'& img': {
		width: pxToRem(30),
		height: pxToRem(30)
	}
};
const content: CSSProperties = {
  fontSize: pxToRem(15),
  fontFamily: DEFAULT_FONT_FAMILY,
  opacity: 0.5,
  lineHeight: 1.67,
  fontWeight: 600,
  marginTop: pxToRem(5)
};
const buttonIcon: CSSProperties = {
  position: 'absolute',
  left: pxToRem(15)
};

export const styles = createStyles({
    container,
    buttonWrapper,
    bigButton,
      content,
    li,
    buttonIcon
  });
