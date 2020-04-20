export interface IDateTimePickerProps {
	open: boolean;
	hourIndex: number;
	minIndex: number;
	handleRequestClose: () => void;
	handleDatePickerChange: (hour: number, min: number) => void;
}
