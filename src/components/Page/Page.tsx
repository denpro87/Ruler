import { Box, makeStyles } from '@material-ui/core';
import { DEFAULT_PAGE_BACKGROUND, styles } from './Page.styles';
import { GoBackIconButton } from 'components/IconButton';
import { IPageProps } from './Page.types';
import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles(styles);

export const Page: React.FunctionComponent<IPageProps> = React.memo(
	({ background, backgroundColor, fullPage, goBackIconButtonProps, className, onClick, children }) => {
		const classes = useStyles({
			background,
			backgroundColor,
			fullPage
		});
		const history = useHistory();

		return (
			<IonPage>
				<IonContent>
					<Box className={clsx(classes.page, className)} onClick={onClick}>
						{fullPage ? (
							children
						) : (
							<>
								<Box className={classes.pageHeader}>
									<GoBackIconButton
										onClick={e => {
											e.preventDefault();
											history.goBack();
										}}
										{...goBackIconButtonProps}
									/>
								</Box>
								<Box className={classes.pageContent}>{children}</Box>
							</>
						)}
					</Box>
				</IonContent>
			</IonPage>
		);
	}
);

Page.defaultProps = {
	background: DEFAULT_PAGE_BACKGROUND
};
