import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem, DEFAULT_FONT_FAMILY } from 'styles';

const listItem: CSSProperties = {
  padding: `${pxToRem(11)} 0`,
  color: '#00b559'
};
const text: CSSProperties = {
	lineHeight: 1.67,
	fontWeight: 600,
	fontSize: pxToRem(15),
	fontFamily: DEFAULT_FONT_FAMILY
};
const divider: CSSProperties = {
  backgroundColor: '#181c19',
  opacity: '5%'
};
const content: CSSProperties = {
  opacity: 0.5
};
const subTitle: CSSProperties = {
  margin: `${pxToRem(20)} 0 ${pxToRem(5)} 0`,
};
export const styles = createStyles({
  listItem,
  text,
  divider,
  content,
  subTitle
});
