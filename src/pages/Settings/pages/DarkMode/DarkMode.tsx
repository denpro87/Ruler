import { BottomSheet, GreenButton, Icon, LightGreenButton, Page, Styling, SwitchListItem } from 'components';
import { Box, Button, Divider, List, ListItem, ListItemSecondaryAction, ListItemText, Typography, makeStyles } from '@material-ui/core';
import { IDarkModeProps, IDarkModeState } from './DarkMode.types';
import { IonDatetime } from '@ionic/react';
import { styles } from './DarkMode.styles';

import React from 'react';

const useStyles = makeStyles(styles);

export class DarkMode extends React.Component<IDarkModeProps, IDarkModeState> {
	state = {
		automaticallyDarkMode: true,
		dontUseDarkMode: false,
		scheduledDarkMode: false,
		startTimeDarkMode: '22:00',
		endTimeDarkMode: '07:00',
		open: false,
		dateItem: ''
	};

	startDate = React.createRef();

	endDate = React.createRef();

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

	private handleBottomSheetChange = (isOpen: boolean) => {
		this.setState({ open: isOpen, dateItem: '' });
	};

	private handleStartClick = () => {
		this.setState({ open: true, dateItem: 'start' });
	};

	private handleEndClick = () => {
		this.setState({ open: true, dateItem: 'end' });
	};

	render() {
		return (
			<Styling useStyles={useStyles}>
				{classes => (
					<Page title="Dark mode" titleSize="medium">
						<List className={classes.providersList}>
							<SwitchListItem
								title="Automatically"
								name="automaticallyDarkMode"
								checked={this.state.automaticallyDarkMode}
								onChange={this.handleAutomaticallyChange}
							/>
							<Divider className={classes.divider} />
							<SwitchListItem
								title="Manually enable till tomorrow"
								name="dontUseDarkMode"
								checked={this.state.dontUseDarkMode}
								onChange={this.handleDontUseChange}
							/>
							<Typography className={classes.subText}>Set by time</Typography>
							<SwitchListItem
								title="Scheduled"
								name="scheduledDarkMode"
								checked={this.state.scheduledDarkMode}
								onChange={this.handleScheduledChange}
							/>

							{this.state.scheduledDarkMode && (
								<Box>
									<Divider className={classes.divider} />
									<ListItem className={classes.li}>
										<ListItemText className={classes.itemText}>Start</ListItemText>
										<ListItemSecondaryAction className={classes.secondaryAction}>
											<Button className={classes.secondaryButton} onClick={this.handleStartClick}>
												{this.state.startTimeDarkMode}
												<Icon iconName="forward" color="rgba(24, 28, 25, 0.5)" />
											</Button>
										</ListItemSecondaryAction>
									</ListItem>
									<Divider className={classes.divider} />
									<ListItem className={classes.li}>
										<ListItemText className={classes.itemText}>Ending</ListItemText>
										<ListItemSecondaryAction className={classes.secondaryAction}>
											<Button className={classes.secondaryButton} onClick={this.handleEndClick}>
												{this.state.endTimeDarkMode}
												<Icon iconName="forward" color="rgba(24, 28, 25, 0.5)" />
											</Button>
										</ListItemSecondaryAction>
										<Divider className={classes.divider} />
									</ListItem>
								</Box>
							)}
						</List>
						<BottomSheet title="" open={this.state.open} onBottomSheetChange={this.handleBottomSheetChange}>
							<IonDatetime
								// ref={this.state.dateItem === 'start' ? this.startDate : this.endDate}
								display-timezone="utc"
								display-format="HH:mm"
								mode="ios"
								pickerOptions={{
									cssClass: classes.customPicker
								}}
								picker-format="HH:mm"
								value={this.state.dateItem === 'start' ? this.state.startTimeDarkMode : this.state.endTimeDarkMode}
								onIonChange={this.state.dateItem === 'start' ? e => this.handleStartDateChange(e) : e => this.handleEndDateChange(e)}
							/>
							<div className={classes.bottomSheetButtonWrapper}>
								<LightGreenButton>Cancel</LightGreenButton>
								<GreenButton>Set time</GreenButton>
							</div>
						</BottomSheet>
					</Page>
				)}
			</Styling>
		);
	}
}
