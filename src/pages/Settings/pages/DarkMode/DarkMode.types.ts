import { IntlShape } from 'react-intl';

export interface IDarkModeState {
	automaticallyDarkMode: boolean;
	dontUseDarkMode: boolean;
	scheduledDarkMode: boolean;
	startTimeDarkMode: string;
	endTimeDarkMode: string;

	[index: string]: boolean | Date | string;
}

export interface IDarkModeProps {
	intl: IntlShape;
}
