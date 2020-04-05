import { IconButton, Page, SocialIconButton } from 'components';
import React from 'react';

export const Welcome: React.FunctionComponent = () => (
	<Page backgroundColor="#AAA">
		<SocialIconButton iconProps={{ iconName: 'facebook' }} />
	</Page>
);
