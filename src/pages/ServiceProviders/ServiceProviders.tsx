import { IServiceProvidersProps, IServiceProvidersState } from './ServiceProviders.types';
import { Icon, Page } from 'components';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { styles } from './ServiceProviders.styles';
import React from 'react';

import providersData from './providers-data.json';

export class ServiceProviders extends React.Component<IServiceProvidersProps, IServiceProvidersState> {
	render() {
		return (
			<Page title="Service Providers" titleSize="large">
				<List>
					{providersData.providers.map((provider, i) => (
						<ListItem key={i} button>
							<ListItemIcon>
								<Icon iconName="forward" />
							</ListItemIcon>
							<ListItemText primary={provider.name} secondary={provider.subtext} />
							<ListItemIcon>
								<Icon iconName="forward" />
							</ListItemIcon>
						</ListItem>
					))}
				</List>
			</Page>
		);
	}
}
