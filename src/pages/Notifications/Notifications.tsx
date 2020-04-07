import { Box, Divider, List, Typography, makeStyles } from '@material-ui/core';
import { INotificationsProps, INotificationsState } from './Notifications.types';
import { Page, Styling, SwitchListItem } from 'components';
import { styles } from './Notifications.styles';
import React from 'react';

const useStyles = makeStyles(styles);

export class Notifications extends React.Component<INotificationsProps, INotificationsState> {
	state = {
		newsNotify: true,
		reportNotify: true,
		newAreaNotify: true,
		vehicleNotify: true,
		bikeNotify: false,
		carNotify: false,
		scooterNotify: false
	};

	private handleNewsNotifyChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void =>
		this.setState({ newsNotify: checked });

	private handleReportNotifyChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void =>
		this.setState({ reportNotify: checked });

	private handleNewAreaNotifyChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void =>
		this.setState({ newAreaNotify: checked });

	private handleVehicleNotifyChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {
		this.setState({ vehicleNotify: checked });

		if (checked) {
			this.setState({ bikeNotify: false, carNotify: false, scooterNotify: false });
		}
	};

	private handleBikeNotifyChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void =>
		this.setState({ bikeNotify: checked });

	private handleCarNotifyChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void =>
		this.setState({ carNotify: checked });

	private handleScooterNotifyChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void =>
		this.setState({ scooterNotify: checked });

	render() {
		return (
			<Styling useStyles={useStyles}>
				{classes => (
					<Page>
						<Box className={classes.innerContent}>
							<List className={classes.providersList}>
								<SwitchListItem title="Discounts and News" checked={this.state.newsNotify} onChange={this.handleNewsNotifyChange} />
								<Divider />
								<SwitchListItem title="New report reply" checked={this.state.reportNotify} onChange={this.handleReportNotifyChange} />
								<Divider />
								<SwitchListItem title="New area" checked={this.state.newAreaNotify} onChange={this.handleNewAreaNotifyChange} />
								<Typography variant="caption">Vehicle notifications</Typography>
								<SwitchListItem
									title="Vehicle near you"
									name="vehicleNotify"
									checked={this.state.vehicleNotify}
									onChange={this.handleVehicleNotifyChange}
								/>
								<Divider />
								<SwitchListItem
									title="Bike near you"
									checked={this.state.bikeNotify}
									onChange={this.handleBikeNotifyChange}
									disabled={this.state.vehicleNotify}
								/>
								<Divider />
								<SwitchListItem
									title="Car near you"
									onChange={this.handleCarNotifyChange}
									checked={this.state.carNotify}
									disabled={this.state.vehicleNotify}
								/>
								<Divider />
								<SwitchListItem
									title="Scooter near you"
									onChange={this.handleScooterNotifyChange}
									checked={this.state.scooterNotify}
									disabled={this.state.vehicleNotify}
								/>
							</List>
						</Box>
					</Page>
				)}
			</Styling>
		);
	}
}
