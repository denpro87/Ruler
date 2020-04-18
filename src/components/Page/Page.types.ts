import { BoxProps } from '@material-ui/core';
import { GoBackIconButtonProps } from 'components/IconButton';

export type FullPageProps = Omit<IPageProps, 'fullPage'>;

export interface IPageProps extends Pick<BoxProps, 'onClick'> {
	className?: string;
	pageHeaderClassName?: string;
	background?: string;
	backgroundColor?: string;
	fullPage?: boolean;
	canGoBack?: boolean;
	title?: string;
	titleSize?: 'medium' | 'large';
	noHorizontalContentPadding?: boolean;
	goBackIconButtonProps?: GoBackIconButtonProps;
	onRenderBackground?: () => React.ReactElement;
}
