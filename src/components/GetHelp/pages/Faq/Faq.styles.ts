import { CSSProperties, createStyles } from '@material-ui/styles';

const list: CSSProperties = {
  padding: 0
};
const searchBox: CSSProperties = { marginTop: 0, marginBottom: 15 };
const listItem: CSSProperties = {
  padding: '0px 0px 7px 0px',
  color: '#00b559'
};
const text: CSSProperties = {
	lineHeight: 1.67,
	fontWeight: 600,
	fontSize: 15,
	fontFamily: 'Montserrat'
};
const content: CSSProperties = {
  opacity: 0.5
};
const subHeader: CSSProperties = {
	fontSize: '20px',
	fontWeight: 'bold',
	lineHeight: 1.5,
	marginLeft: 0,
	marginBottom: 11,
	marginTop: 15,
	color: '#181c19',
	fontFamily: 'Montserrat'
};
const faqContentItem: CSSProperties = {
	display: 'flex',
	marginTop: 10
};
const faqLi: CSSProperties = {
	marginRight: 9
};
export const styles = createStyles({
  list,
  searchBox,
  listItem,
  text,
  content,
  subHeader,
  faqContentItem,
  faqLi
});
