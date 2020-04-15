import { CSSProperties, createStyles } from '@material-ui/styles';

const content: CSSProperties = {
  fontSize: 15,
  fontFamily: 'Montserrat',
  opacity: 0.5,
  lineHeight: 1.67,
  fontWeight: 600,
  marginTop: 5
};
const reportContainer: CSSProperties = {
  backgroundColor: '#f3f3f3',
  marginTop: 25,
  borderRadius: 15,
};
const reportHeaderWrapper: CSSProperties = {
  backgroundColor: '#ffffff',
  boxShadow: '0 10px 40px 0 rgba(0, 0, 0, 0.1)',
  padding: '20px 20px 20px 10px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15
};
const reportTitleWrapper: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  '& span': {
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& span': {
      width: 10,
      height: 10,
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& span': {
        width: 4,
        height: 4,
        backgroundColor: '#ffffff',
        borderRadius: 2
      }
    }
  },
  '& div': {
    '& h6': {
      opacity: '1 !important',
      marginTop: 0
    },
    '& p': {
      fontSize: 10,
      lineHeight: 1.5,
      marginTop: 0
    }
  }
}
const reportIconWrapper: CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
};
const reportDataWrapper: CSSProperties = {
	padding: '5px 0px 20px 0px',
	'& div': {
    display: 'flex',
    paddingTop: 15,
		'& div': {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
			padding: '0 0 0 45px',
			'& h6': {
				opacity: 0.5
			}
		}
	}
};
const reportDataText: CSSProperties = {
	fontSize: 10,
	fontFamily: 'Montserrat',
	lineHeight: 1.5,
	fontWeight: 600,
	color: '#181c19'
};
const reportBadge: CSSProperties = {
  width: 6,
  height: 6,
  borderRadius: 3,
  backgroundColor: '#ffffff',
  position: 'absolute',
  top: 12,
  left: 12
}
const bgYellow: CSSProperties = {
	backgroundColor: '#f8ca06'
};
const bgGreen: CSSProperties = {
	backgroundColor: '#00b559'
};
const bgWhite: CSSProperties = {
	backgroundColor: '#ffffff'
};
export const styles = createStyles({
  content,
  reportContainer,
  reportHeaderWrapper,
  reportTitleWrapper,
  reportDataWrapper,
  reportIconWrapper,
  reportDataText,
  reportBadge,
  bgYellow,
  bgGreen,
  bgWhite
});
