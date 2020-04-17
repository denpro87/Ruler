export interface IBottomSheetProps {
	open: boolean;
	onBottomSheetChange: (isOpen: boolean) => void;
	onBadlyClick: () => void;
	onDamagedClick: () => void;
	onContactClick: () => void;
}
