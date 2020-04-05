import { Button, Icon, IconButton, Page, Text, createTextStyles } from 'components';
import React from 'react';

const welcomeText = createTextStyles({
	fontSize: 15,
	fontWeight: 600,
	fontStretch: 'normal',
	fontStyle: 'normal',
	lineHeight: 1.67,
	letterSpacing: 'normal',
	color: 'rgb(24, 28, 25, 0.5)'
});

export const Welcome: React.FunctionComponent = () => (
	<Page>
		<Text textStyles={welcomeText}>
			Whether you are looking for a way to get to work, class, or just need a breath of fresh air, Bird offers some of the best electric
			scooters for adults. Order a Bird scooter now to get a convenient, eco-friendly transportation options and relieve your reliance on
			cars and traditional expensive and pollution causing transport options.
		</Text>
		<Button iconProps={{ iconName: 'create-account' }}>Create account</Button>
		<IconButton>Hello World</IconButton>
	</Page>
);
