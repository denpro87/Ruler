import { IPageProps } from './Page.types';
import { IonContent, IonPage } from '@ionic/react';
import React from 'react';

export const Page: React.FunctionComponent<IPageProps> = ({ children }) => (
	<IonPage>
		<IonContent>{children}</IonContent>
	</IonPage>
);
