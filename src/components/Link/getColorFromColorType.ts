import {
	LINK_BLACK_COLOR_TYPE_HOVERED_TEXT_COLOR,
	LINK_BLACK_COLOR_TYPE_PRESSED_TEXT_COLOR,
	LINK_BLACK_COLOR_TYPE_TEXT_COLOR,
	LINK_GREEN_COLOR_TYPE_HOVERED_TEXT_COLOR,
	LINK_GREEN_COLOR_TYPE_PRESSED_TEXT_COLOR,
	LINK_GREEN_COLOR_TYPE_TEXT_COLOR
} from './Link.variables';
import { LinkColorType } from './Link.types';

export const getColorFromColorType = (
	colorType: LinkColorType,
	isDarkMode: boolean
): { linkColor: string; hoveredLinkColor: string; pressedLinkColor: string } => {
	switch (colorType) {
		case 'black':
			return {
				linkColor: isDarkMode ? '#fff' : LINK_BLACK_COLOR_TYPE_TEXT_COLOR,
				hoveredLinkColor: isDarkMode ? '#fff' : LINK_BLACK_COLOR_TYPE_HOVERED_TEXT_COLOR,
				pressedLinkColor: isDarkMode ? '#fff' : LINK_BLACK_COLOR_TYPE_PRESSED_TEXT_COLOR
			};

		case 'green':
		case 'default':
		default:
			return {
				linkColor: isDarkMode ? '#f8ca06' : LINK_GREEN_COLOR_TYPE_TEXT_COLOR,
				hoveredLinkColor: isDarkMode ? '#f8ca06' : LINK_GREEN_COLOR_TYPE_HOVERED_TEXT_COLOR,
				pressedLinkColor: isDarkMode ? '#f8ca06' : LINK_GREEN_COLOR_TYPE_PRESSED_TEXT_COLOR
			};
	}
};
