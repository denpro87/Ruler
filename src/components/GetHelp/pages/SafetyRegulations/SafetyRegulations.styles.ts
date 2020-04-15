import { CSSProperties, createStyles } from '@material-ui/styles';

const listItem: CSSProperties = {
  padding: '11px 0px',
  color: '#00b559'
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
const content: CSSProperties = {
  opacity: 0.5
};
const subTitle: CSSProperties = {
  margin: '20px 0 5px 0',
};
export const styles = createStyles({
  listItem,
  text,
  divider,
  content,
  subTitle
});
