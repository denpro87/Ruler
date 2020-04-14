import { Divider, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { Page, SidebarMenuItem } from 'components';
import { Stack } from '@fluentui/react';
import { styles } from './GetHelp.styles';

import React from 'react';

const useStyles = makeStyles(styles);

const items = [
	{
		title: 'Bike',
		href: '/get-help/regulations-bike'
	},
	{
		title: 'Car',
		href: '/get-help/regulations-car'
	},
	{
		title: 'Scooter',
		href: '/get-help/regulations-scooter'
	}
];
export const SafetyRegulations: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<>
			<Page title="Safety regulations" titleSize="medium">
				<Stack horizontalAlign="stretch" grow={1} tokens={{ childrenGap: 0 }} verticalFill>
					{items.map((item, index) => (
						<Stack.Item key={index}>
							{index > 0 && <Divider className={classes.menuItemUnderLine} />}
							<SidebarMenuItem className={clsx(classes.menuItem, classes.greenText)} title={item.title} href={item.href} />
						</Stack.Item>
					))}
				</Stack>
			</Page>
		</>
	);
};
