export interface IDarkModeState {
	automaticallyDarkMode: boolean;
	dontUseDarkMode: boolean;
	scheduledDarkMode: boolean;
	startTimeDarkMode: string;
	endTimeDarkMode: string;
	pickerIsOpen: boolean;
	pickerItem: string;

	[index: string]: boolean | Date | string;
}

export interface IDarkModeProps {}
