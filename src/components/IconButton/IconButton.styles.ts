import { CreateCSSProperties } from '@material-ui/styles';
import { DEFAULT_ICON_BUTTON_SIZE, ICON_BUTTON_BOX_SHADOW, ICON_BUTTON_BOX_SHADOW_INSET } from './IconButton.variables';
import { DEFAULT_ICON_SIZE } from 'components';
import { createStyles } from '@material-ui/core';
import { initial, pxToRem } from 'styles';

const iconButton: CreateCSSProperties = {
	padding: (props: any) => {
		const paddingX = Math.max(0, (initial(props.width, DEFAULT_ICON_BUTTON_SIZE) - initial(props.iconWidth, DEFAULT_ICON_SIZE)) / 2);
		const paddingY = Math.max(0, (initial(props.height, DEFAULT_ICON_BUTTON_SIZE) - initial(props.iconHeight, DEFAULT_ICON_SIZE)) / 2);

		return `${paddingY}px ${paddingX}px`;
	},
	color: '#000',
	borderRadius: pxToRem(15),
	backgroundColor: '#fff',
	boxShadow: (props: any) => {
		const shadows = [];

		if (!props.noShadow) {
			shadows.push(ICON_BUTTON_BOX_SHADOW);
		}

		if (props.outlined) {
			shadows.push(ICON_BUTTON_BOX_SHADOW_INSET);
		}

		return shadows.join(',');
	},
	'&:hover': {
		backgroundColor: '#f2f2f2'
	},
	'& .MuiTouchRipple-child': {
		borderRadius: pxToRem(15)
	}
};

export const styles = createStyles({
	iconButton
});
