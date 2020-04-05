import { CSSProperties, createStyles } from '@material-ui/styles';

const newsItem: CSSProperties = {
	display: 'grid',
	gridTemplateAreas: '"image social date"  "image title title" "image description description"',
	gridTemplateRows: '20px 50px 50px',
	gridTemplateColumns: '90px 110px auto',
	height: '120px'
};

const item1: CSSProperties = {
	gridArea: 'image',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '20px',
	overflow: 'hidden',
	marginRight: '20px',
	border: 'solid 1px #80808088'
};

const item2: CSSProperties = {
	gridArea: 'social',
	overflow: 'hidden',
	textAlign: 'left',
	color: '#00b559',
	fontWeight: 'bold',
	fontSize: '10px',
	fontFamily: 'Montserrat',
	lineHeight: '15px'
};

const item3: CSSProperties = {
	gridArea: 'date',
	overflow: 'hidden',
	textAlign: 'right',
	color: 'grey',
	fontWeight: 'bold',
	fontSize: '10px',
	fontFamily: 'Montserrat',
	lineHeight: '15px'
};

const item4: CSSProperties = {
	gridArea: 'title',
	overflow: 'hidden',
	fontSize: '15px',
	fontWeight: 'bold',
	lineHeight: '25px',
	fontFamily: 'Montserrat',
	color: '#181c19'
};

const item5: CSSProperties = {
	gridArea: 'description',
	overflow: 'hidden',
	fontSize: '10px',
	fontWeight: 'bold',
	lineHeight: '15px',
	fontFamily: 'Montserrat',
	color: '#181c197f'
};

const newsImage: CSSProperties = {
	width: '70px',
	height: '100%',
	objectFit: 'cover'
};

const ionItem: CSSProperties = {
	padding: '-30px'
};

export const styles = createStyles({
	newsItem,
	item1,
	item2,
	item3,
	item4,
	item5,
	newsImage,
	ionItem
});
