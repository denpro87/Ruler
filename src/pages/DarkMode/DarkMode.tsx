import { Box, Divider, List, ListItem, Typography, makeStyles } from '@material-ui/core';
import { IDarkModeProps, IDarkModeState } from './DarkMode.types';
import { Icon, Page, Styling, SwitchListItem } from 'components';
import { IonDatetime, IonItem } from '@ionic/react';
import { styles } from './DarkMode.styles';

import React from 'react';

const useStyles = makeStyles(styles);

export class DarkMode extends React.Component<IDarkModeProps, IDarkModeState> {
	state = {
		automaticallyDarkMode: true,
		dontUseDarkMode: false,
		scheduledDarkMode: false,
		startTimeDarkMode: '1990-02-19T22:00Z',
		endTimeDarkMode: '1990-02-19T07:00Z'
	};

	private handleAutomaticallyChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {
		if (checked) {
			this.setState({ dontUseDarkMode: false, scheduledDarkMode: false });
		}
		this.setState({ automaticallyDarkMode: checked });
	};

	private handleDontUseChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {
		if (checked) {
			this.setState({ automaticallyDarkMode: false, scheduledDarkMode: false });
		}
		this.setState({ dontUseDarkMode: checked });
	};

	private handleScheduledChange = (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {
		if (checked) {
			this.setState({ automaticallyDarkMode: false, dontUseDarkMode: false });
		}
		this.setState({ scheduledDarkMode: checked });
	};

	private handleStartDateChange = (_event: CustomEvent<any>): void => {
		this.setState({ startTimeDarkMode: _event.detail.value });
	};

	private handleEndDateChange = (_event: CustomEvent<any>): void => {
		this.setState({ endTimeDarkMode: _event.detail.value });
	};

	render() {
		return (
			<Styling useStyles={useStyles}>
				{classes => (
					<Page>
						<Box /* className={classes.innerContent} */>
							<List className={classes.providersList}>
								<SwitchListItem
									title="Automatically"
									name="automaticallyDarkMode"
									checked={this.state.automaticallyDarkMode}
									onChange={this.handleAutomaticallyChange}
								/>
								<Divider />
								<SwitchListItem
									title="Don't use"
									name="dontUseDarkMode"
									checked={this.state.dontUseDarkMode}
									onChange={this.handleDontUseChange}
								/>
								<Divider />
								<Typography variant="caption">Set by time</Typography>
								<SwitchListItem
									title="Scheduled"
									name="scheduledDarkMode"
									checked={this.state.scheduledDarkMode}
									onChange={this.handleScheduledChange}
								/>

								{this.state.scheduledDarkMode && (
									<Box>
										<Divider />

										<ListItem className={classes.li}>
											<IonItem lines="none" className={classes.ionItem}>
												<Typography variant="h6">Start</Typography>
												<IonDatetime
													display-timezone="utc"
													mode="ios"
													pickerOptions={{
														cssClass: classes.customPicker
													}}
													display-format="HH:mm"
													picker-format="HH:mm"
													value={this.state.startTimeDarkMode}
													onIonChange={e => this.handleStartDateChange(e)}
												/>
												{/* <Icon iconName={IconName.Forward} /> */}
											</IonItem>
										</ListItem>
										<Divider />
										<ListItem className={classes.li}>
											<IonItem lines="none" className={classes.ionItem}>
												<Typography variant="h6">Ending</Typography>
												<IonDatetime
													display-timezone="utc"
													display-format="HH:mm"
													mode="ios"
													pickerOptions={{
														cssClass: classes.customPicker
													}}
													picker-format="HH:mm"
													value={this.state.endTimeDarkMode}
													onIonChange={e => this.handleEndDateChange(e)}
												/>
												{/* <Icon iconName={IconName.Forward} /> */}
											</IonItem>
											<Divider />
										</ListItem>
									</Box>
								)}
							</List>
						</Box>
					</Page>
				)}
			</Styling>
		);
	}
}
