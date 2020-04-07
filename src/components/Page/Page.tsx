import { Box } from '@material-ui/core';
import { FullPageProps, IPageProps } from './Page.types';
import { GoBackIconButton } from 'components/IconButton';
import { IonContent, IonPage } from '@ionic/react';
import { makeStyles } from '@material-ui/styles';
import { styles } from './Page.styles';
import { useHistory } from 'react-router';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const Page: React.FunctionComponent<IPageProps> = ({
	fullPage,
	background,
	backgroundColor,
	onRenderBackground,
	canGoBack,
	goBackIconButtonProps,
	onClick,
	className,
	children
}) => {
	const classes = useStyles({
		background,
		backgroundColor
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
			{canGoBack && (
				<Box className={classes.pageHeader}>
					<GoBackIconButton onClick={handleGoBack} {...goBackIconButtonProps} />
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

/**
 * @description This component is for a page that has at most the full height and width and has no scroll bar.
 */
export const FullPage: React.FunctionComponent<FullPageProps> = props => <Page fullPage {...props} />;
