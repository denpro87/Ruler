import { DEFAULT_ICON_SIZE } from 'components';
import { createStyles } from '@material-ui/core';
import { initial } from 'styles';

export const DEFAULT_ICON_BUTTON_SIZE = 50;

const ICON_BUTTON_BOX_SHADOW = '0 10px 20px 0 rgba(0, 0, 0, 0.07)';
const ICON_BUTTON_BOX_SHADOW_INSET = 'inset 0 0 0 2px #000';

export const styles = createStyles({
	iconButton: {
		padding: (props: any) => {
			const paddingX = Math.max(0, (initial(props.width, DEFAULT_ICON_BUTTON_SIZE) - initial(props.iconWidth, DEFAULT_ICON_SIZE)) / 2);
			const paddingY = Math.max(0, (initial(props.height, DEFAULT_ICON_BUTTON_SIZE) - initial(props.iconHeight, DEFAULT_ICON_SIZE)) / 2);

			return `${paddingY}px ${paddingX}px`;
		},
		color: '#000',
		borderRadius: 15,
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
			borderRadius: 15
		}
	}
});
