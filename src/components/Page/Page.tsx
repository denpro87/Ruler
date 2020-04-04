import { DEFAULT_PAGE_BACKGROUND_COLOR, styles } from './Page.styles';
import { IPageProps } from './Page.types';
import { IonPage } from '@ionic/react';
import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles(styles);

export const Page: React.FunctionComponent<IPageProps> = ({ children, backgroundColor }) => {
	const classes = useStyle();

	return <IonPage className={classes.page}>{children}</IonPage>;
};

Page.defaultProps = {
	backgroundColor: DEFAULT_PAGE_BACKGROUND_COLOR
};
