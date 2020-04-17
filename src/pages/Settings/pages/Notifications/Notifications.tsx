import { Box, Divider, List, makeStyles } from '@material-ui/core';
import { INotificationsProps, INotificationsState } from './Notifications.types';
import { Page, Styling, SwitchListItem, Text } from 'components';
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
					<Page title="Notifications" titleSize="large">
						<List className={classes.providersList}>
							<SwitchListItem title="Discounts and News" checked={this.state.newsNotify} onChange={this.handleNewsNotifyChange} />
							<Divider className={classes.divider} />
							<SwitchListItem title="New report reply" checked={this.state.reportNotify} onChange={this.handleReportNotifyChange} />
							<Divider className={classes.divider} />
							<SwitchListItem title="New area" checked={this.state.newAreaNotify} onChange={this.handleNewAreaNotifyChange} />
							<div className={classes.textWrapper}>
								<Text className={classes.sectionBreaker}>Vehicle notifications</Text>
							</div>
							<SwitchListItem
								title="Vehicle near you"
								name="vehicleNotify"
								checked={this.state.vehicleNotify}
								onChange={this.handleVehicleNotifyChange}
							/>
							<Divider className={classes.divider} />
							<SwitchListItem
								title="Bike near you"
								checked={this.state.bikeNotify}
								onChange={this.handleBikeNotifyChange}
								disabled={this.state.vehicleNotify}
							/>
							<Divider className={classes.divider} />
							<SwitchListItem
								title="Car near you"
								onChange={this.handleCarNotifyChange}
								checked={this.state.carNotify}
								disabled={this.state.vehicleNotify}
							/>
							<Divider className={classes.divider} />
							<SwitchListItem
								title="Scooter near you"
								onChange={this.handleScooterNotifyChange}
								checked={this.state.scooterNotify}
								disabled={this.state.vehicleNotify}
							/>
						</List>
					</Page>
				)}
			</Styling>
		);
	}
}
