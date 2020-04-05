import { BoxProps } from '@material-ui/core';
import { GoBackIconButtonProps } from 'components/IconButton';

export interface IPageProps extends Pick<BoxProps, 'onClick'> {
	className?: string;
	background?: string;
	backgroundColor?: string;
	fullPage?: boolean;
	goBackIconButtonProps?: GoBackIconButtonProps;
}
