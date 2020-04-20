import { CSSProperties } from '@material-ui/styles';

export interface ISlide {
	image?: string;
	title: string;
	description: string;
	style?: CSSProperties;
}

export interface ISlideProps {
	slide: ISlide;
}
