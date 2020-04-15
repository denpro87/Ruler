import { CSSProperties, createStyles } from '@material-ui/styles';

const listItem: CSSProperties = {
	padding: '11px 0px',
	color: '#181c19'
};
const list: CSSProperties = {
  flex: 1
};
const text: CSSProperties = {
	lineHeight: 1.67,
	fontWeight: 600,
	fontSize: 15,
	fontFamily: 'Montserrat'
};

const divider: CSSProperties = {
	backgroundColor: '#181c19',
	opacity: '5%'
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

export const styles = createStyles({
  list,
  listItem,
  text,
  divider,
  buttonWrapper,
  bigButton
});
