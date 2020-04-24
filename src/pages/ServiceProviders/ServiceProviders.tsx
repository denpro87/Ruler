import { IServiceProvidersProps } from './ServiceProviders.types';
import { List } from '@material-ui/core';
import { Page } from 'components';
import { ProviderListItem } from './components';
import { makeStyles } from '@material-ui/styles';
import { styles } from './ServiceProviders.styles';
import { unifyIdentifier } from 'utils';
import { useHistory, useParams } from 'react-router';
import React from 'react';
import providersData from './providers-data.json';

const useStyles = makeStyles(styles);
const resolvePath = (src: string): string => require(`${src}`);

export const ServiceProviders: React.FunctionComponent<IServiceProvidersProps> = () => {
	const history = useHistory();
	const params = useParams<{ provider?: string }>();
	const classes = useStyles();

	const currentProviderName = params.provider && unifyIdentifier(params.provider);
	const currentProvider =
		currentProviderName &&
		providersData.providers.find(provider => {
			const providerName = unifyIdentifier(provider.name);

			return providerName === currentProviderName;
		});

	const handleProviderClick = (provider: string) => () => history.push(`/service-providers/${provider}`);

	return (
		<Page title="Service Providers" titleSize="large" noHorizontalContentPadding>
			<List className={classes.providerList}>
				{currentProvider
					? currentProvider.paragraphs.map((paragraph, i) => (
							<ProviderListItem
								key={i}
								primaryText={paragraph.title}
								secondaryText={paragraph.text}
								providerIconProps={{
									src: resolvePath(currentProvider.logo),
									alt: currentProvider.name
								}}
							/>
					  ))
					: providersData.providers.map((provider, i) => (
							<ProviderListItem
								key={i}
								primaryText={provider.name}
								secondaryText={provider.subtext}
								canGoTo
								providerIconProps={{
									src: resolvePath(provider.logo),
									alt: provider.name
								}}
								onClick={handleProviderClick(unifyIdentifier(provider.name))}
							/>
					  ))}
			</List>
		</Page>
	);
};
