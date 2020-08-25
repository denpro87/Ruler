import { CSSProperties } from '@material-ui/styles';

export interface ISlide {
	imageLight?: string;
	imageDark?: string;
	title: string;
	description: string;
	style?: CSSProperties;
}

export interface ISlideProps {
	slide: ISlide;
}
