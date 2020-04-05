import {
	ICON_BLACK_COLOR_TYPE_PRIMARY_COLOR,
	ICON_BLACK_COLOR_TYPE_SECONDARY_COLOR,
	ICON_GREEN_COLOR_TYPE_COLOR,
	ICON_WHITE_COLOR_TYPE_COLOR
} from './Icon.variables';
import { IconColorType } from './Icon.types';

export const getColorFromColorType = (colorType: IconColorType, colorSubject: 'primary' | 'secondary' = 'primary'): string | undefined => {
	switch (colorType) {
		case 'black':
			return colorSubject === 'primary' ? ICON_BLACK_COLOR_TYPE_PRIMARY_COLOR : ICON_BLACK_COLOR_TYPE_SECONDARY_COLOR;

		case 'green':
			return ICON_GREEN_COLOR_TYPE_COLOR;

		case 'white':
			return ICON_WHITE_COLOR_TYPE_COLOR;
	}

	return undefined;
};
