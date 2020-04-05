export interface IParagraph {
	title: string;
	text: string;
}
export interface IProviderDetailProps {
	className?: string;
	image: string;
	title: string;
	paragraphs: IParagraph[];
}
