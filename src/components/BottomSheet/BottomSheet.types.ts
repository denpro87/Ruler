export interface IBottomSheetProps {
	open: boolean;
	title?: string;
	onBottomSheetChange: (isOpen: boolean) => void;
}
