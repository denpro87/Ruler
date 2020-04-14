import { CSSProperties, createStyles } from '@material-ui/styles';

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

export const styles = createStyles({
    buttonWrapper,
  bigButton,
    content,
  li,
  buttonIcon
  });
