import { Box, Button, List, ListItem, ListItemSecondaryAction, ListItemText, makeStyles } from '@material-ui/core';
import { DateTimePicker, Divider, Icon, Page, Styling, SwitchListItem, Text } from 'components';
import { IDarkModeProps, IDarkModeState } from './DarkMode.types';
import { styles } from './DarkMode.styles';

import React from 'react';

const useStyles = makeStyles(styles);

export class DarkMode extends React.Component<IDarkModeProps, IDarkModeState> {
	state = {
		automaticallyDarkMode: true,
		dontUseDarkMode: false,
		scheduledDarkMode: false,
		startTimeHour: 22,
		startTimeMin: 0,
		endTimeHour: 7,
		endTimeMin: 0,
		pickerIsOpen: false,
		pickerItem: ''
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

	private handleDatePickerChange = (hour: number, min: number): void => {
		if (this.state.pickerItem === 'start') this.setState({ startTimeHour: hour, startTimeMin: min });
		else if (this.state.pickerItem === 'end') this.setState({ endTimeHour: hour, endTimeMin: min });
		this.setState({ pickerIsOpen: false, pickerItem: '' });
	};

	private onClosePicker = () => {
		this.setState({ pickerIsOpen: false, pickerItem: '' });
	};

	private onFirstPickerClick = () => {
		this.setState({ pickerIsOpen: true, pickerItem: 'start' });
	};

	private onEndPickerClick = () => {
		this.setState({ pickerIsOpen: true, pickerItem: 'end' });
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
							<Divider />
							<SwitchListItem
								title="Manually enable till tomorrow"
								name="dontUseDarkMode"
								checked={this.state.dontUseDarkMode}
								onChange={this.handleDontUseChange}
							/>
							<div className={classes.textWrapper}>
								<Text className={classes.subText}>Set by time</Text>
							</div>
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
										<ListItemText className={classes.itemText}>Start</ListItemText>
										<ListItemSecondaryAction className={classes.secondaryAction}>
											<Button className={classes.secondaryButton} onClick={this.onFirstPickerClick}>
												<Text className={classes.dateText}>{`${this.state.startTimeHour}:${this.state.startTimeMin
													.toString()
													.padStart(2, '0')}`}</Text>
												<Icon iconName="forward" color="rgba(24, 28, 25, 0.5)" />
											</Button>
										</ListItemSecondaryAction>
									</ListItem>
									<Divider />
									<ListItem className={classes.li}>
										<ListItemText className={classes.itemText}>Ending</ListItemText>
										<ListItemSecondaryAction className={classes.secondaryAction}>
											<Button className={classes.secondaryButton} onClick={this.onEndPickerClick}>
												<Text className={classes.dateText}>{`${this.state.endTimeHour}:${this.state.endTimeMin
													.toString()
													.padStart(2, '0')}`}</Text>
												<Icon iconName="forward" color="rgba(24, 28, 25, 0.5)" />
											</Button>
										</ListItemSecondaryAction>
									</ListItem>
									<Divider />
								</Box>
							)}
						</List>
						<DateTimePicker open={this.state.pickerIsOpen} onChange={this.handleDatePickerChange} onDismiss={this.onClosePicker} />
					</Page>
				)}
			</Styling>
		);
	}
}
