export interface IDarkModeState {
	automaticallyDarkMode: boolean;
	dontUseDarkMode: boolean;
	scheduledDarkMode: boolean;
	startTimeDarkMode: string;
	endTimeDarkMode: string;
	open: boolean;
	dateItem: string;

	[index: string]: boolean | Date | string;
}

export interface IDarkModeProps {}
