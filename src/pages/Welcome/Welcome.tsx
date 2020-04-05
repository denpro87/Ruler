import { GoBackIconButton, IconButton, Page, SocialIconButton } from 'components';
import React from 'react';

export const Welcome: React.FunctionComponent = () => (
	<Page>
		<SocialIconButton iconProps={{ iconName: 'facebook' }} />
		<GoBackIconButton noShadow={false} />
	</Page>
);
