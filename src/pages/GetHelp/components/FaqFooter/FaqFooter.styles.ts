import { CSSProperties, createStyles } from '@material-ui/styles';

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
const faqFooter: CSSProperties = {
  display: 'flex',
  marginBottom: 23,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
};

export const styles = createStyles({
  li,
  faqFooter
});
