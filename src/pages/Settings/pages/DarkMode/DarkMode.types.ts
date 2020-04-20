export interface IDarkModeState {
	automaticallyDarkMode: boolean;
	dontUseDarkMode: boolean;
	scheduledDarkMode: boolean;
	startTimeHour: number;
	startTimeMin: number;
	endTimeHour: number;
	endTimeMin: number;
	pickerIsOpen: boolean;
	pickerItem: string;

	[index: string]: boolean | Date | string | number;
}

export interface IDarkModeProps {}
