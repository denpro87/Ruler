import { RouteComponentProps } from 'react-router-dom';

export type Paragraph = {
	title: string;
	text: string;
};

export type ServiceProvider = {
	name: string;
	icon: string;
	shortDescription: string;
	paragraphs: Paragraph[];
};

export interface IServiceProvidersState {
	selectedProvider?: ServiceProvider;
	providers: ServiceProvider[];
}

export type IServiceProvidersProps = RouteComponentProps<any>;
