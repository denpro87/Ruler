import { Box } from '@material-ui/core';
import { DEFAULT_PAGE_BACKGROUND_COLOR, GoBackIconButton, Text } from 'components';
import { FullPageProps, IPageProps } from './Page.types';
import { IonContent, IonPage } from '@ionic/react';
import { makeStyles } from '@material-ui/styles';
import { styles } from './Page.styles';
import { useHistory } from 'react-router';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const Page: React.FunctionComponent<IPageProps> = ({
	title,
	titleSize,
	fullPage,
	background,
	backgroundColor,
	onRenderBackground,
	canGoBack = !fullPage,
	goBackIconButtonProps,
	onClick,
	className,
	noHorizontalContentPadding,
	children
}) => {
	const hasPageHeader = Boolean(canGoBack || title);
	const classes = useStyles({
		hasPageHeader,
		titleSize,
		background,
		backgroundColor,
		noHorizontalContentPadding
	});
	const history = useHistory();

	const handleGoBack = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		e.preventDefault();
		history.goBack();
	};

	const backgroundElement = onRenderBackground?.();
	const backgroundContainer = <Box className={classes.backgroundContainer}>{backgroundElement}</Box>;
	const innerContent = (
		<>
			{hasPageHeader && (
				<Box className={classes.pageHeader}>
					{canGoBack && <GoBackIconButton onClick={handleGoBack} {...goBackIconButtonProps} />}
					{title && (
						<Box className={classes.pageHeaderInner}>
							<Text className={classes.pageTitle} block>
								{title}
							</Text>
						</Box>
					)}
				</Box>
			)}
			<Box className={classes.pageContent}>{children}</Box>
		</>
	);

	return (
		<IonPage onClick={onClick}>
			<IonContent>
				{fullPage ? (
					<Box className={clsx(classes.fullPage, className)}>
						{backgroundContainer}
						{(children || canGoBack) && <Box className={classes.fullPageBody}>{innerContent}</Box>}
					</Box>
				) : (
					<>
						{backgroundContainer}
						<Box className={clsx(classes.pageBody, className)}>{innerContent}</Box>
					</>
				)}
			</IonContent>
		</IonPage>
	);
};

Page.defaultProps = {
	titleSize: 'medium',
	backgroundColor: DEFAULT_PAGE_BACKGROUND_COLOR
};

/**
 * @description This component is for a page that has at most the full height and width and has no scroll bar.
 */
export const FullPage: React.FunctionComponent<FullPageProps> = props => <Page fullPage {...props} />;
