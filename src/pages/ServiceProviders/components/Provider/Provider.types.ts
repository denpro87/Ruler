export interface IProviderProps {
	className?: string;
	title: string;
	image?: string;
	onClick?: (event: React.MouseEvent<HTMLElement>, provider: string) => void;
}
