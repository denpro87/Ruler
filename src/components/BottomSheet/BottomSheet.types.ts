export interface IBottomSheetProps {
	open: boolean;
	title?: string;
	description?: string;
	darkMode?: boolean;
	onBottomSheetChange: (isOpen: boolean) => void;
}
