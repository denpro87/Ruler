import { CSSProperties, createStyles } from '@material-ui/styles';
import { pxToRem } from 'styles';

const buttonGroupWrapper: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	backgroundColor: 'rgba(255, 255, 255, 0.05)',
	padding: `${pxToRem(15)} 0 ${pxToRem(30)} 0`
};

const button: CSSProperties = {
	padding: `${pxToRem(4)} 0`,
	'& .MuiButton-label > span': {
		padding: 0,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	'& .MuiButton-label:after': {
		content: '""',
		width: 0,
		height: 0,
		flex: 'unset'
	},
	'&:active': {
		backgroundColor: '#f8ca06'
	},
	'&:hover': {
		backgroundColor: '#f8ca06'
	}
};

const activeBackground: CSSProperties = {
	backgroundColor: '#f8ca06'
};

const inActiveBackground: CSSProperties = {
	backgroundColor: '#ffffff'
};

const iconNameText: CSSProperties = {
	fontWeight: 600,
	lineHeight: 1.5,
	color: 'rgba(24, 28, 25, 0.5)',
	fontSize: pxToRem(10)
};

const footer: CSSProperties = {
	marginTop: 'auto'
};

const addPhotosButton: CSSProperties = {
	marginBottom: pxToRem(15)
};

const damagedVehicleContainer: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	flex: 1
};

const imageGallery: CSSProperties = {
	padding: `${pxToRem(5)} 0 0 0`,
	overflow: 'auto'
};

const imageGalleryInside: CSSProperties = {
	minHeight: pxToRem(50),
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'nowrap'
};

const takenImage: CSSProperties = {
	width: pxToRem(50),
	height: pxToRem(50),
	marginRight: pxToRem(15),
	objectFit: 'cover',
	minWidth: pxToRem(50),
	borderRadius: pxToRem(15),
	overflow: 'hidden'
};

export const styles = createStyles({
	buttonGroupWrapper,
	button,
	iconNameText,
	activeBackground,
	inActiveBackground,
	footer,
	addPhotosButton,
	damagedVehicleContainer,
	imageGallery,
	imageGalleryInside,
	takenImage
});
