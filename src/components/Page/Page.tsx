import { DEFAULT_PAGE_BACKGROUND_COLOR } from './Page.styles';
import { IPageProps } from './Page.types';
import { IonPage } from '@ionic/react';
import React from 'react';

export const Page: React.FunctionComponent<IPageProps> = ({ children, backgroundColor }) => <IonPage>{children}</IonPage>;

Page.defaultProps = {
	backgroundColor: DEFAULT_PAGE_BACKGROUND_COLOR
};
