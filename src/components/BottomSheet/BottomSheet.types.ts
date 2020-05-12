export interface IBottomSheetProps {
	open: boolean;
	title?: string;
	description?: string;
	darkMode?: boolean;
	hasCloseButton?: boolean;
	outDecorator?: boolean;
	onBottomSheetChange: (isOpen: boolean) => void;
	onCloseButtonClick?: React.ReactEventHandler<{}>;
}
