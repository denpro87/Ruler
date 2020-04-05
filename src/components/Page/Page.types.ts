import { BoxProps } from '@material-ui/core';

export interface IPageProps extends Pick<BoxProps, 'onClick'> {
	className?: string;
	background?: string;
	backgroundColor?: string;
}
