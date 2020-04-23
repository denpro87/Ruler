import { RouteComponentProps } from 'react-router';
export interface IDriverLicenceProps extends RouteComponentProps {
	data?: string[];
	state?: 'success' | 'invalid' | 'progress';
}
