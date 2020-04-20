import { CSSProperties } from '@material-ui/styles';

export interface ICustomSlide {
	image?: string;
	title: string;
	description: string;
	style?: CSSProperties;
}

export interface ICustomIonSlide {
	slide: ICustomSlide;
}
