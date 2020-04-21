import { Box, Button, Divider, List, ListItem, ListItemSecondaryAction, ListItemText, makeStyles } from '@material-ui/core';
import { IDarkModeProps, IDarkModeState } from './DarkMode.types';
import { Icon, Page, Styling, SwitchListItem, Text } from 'components';
import { IonDatetime } from '@ionic/react';
import { styles } from './DarkMode.styles';

import { injectIntl } from 'react-intl';
import React from 'react';

const useStyles = makeStyles(styles);

class DarkModePage extends React.Component<IDarkModeProps, IDarkModeState> {
	state = {
		automaticallyDarkMode: true,
		dontUseDarkMode: false,
		scheduledDarkMode: false,
		startTimeDarkMode: '22:00',
		endTimeDarkMode: '07:00'
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

	private handleBottomSheetChange = (isOpen: boolean) => {
		this.setState({ open: isOpen, dateItem: '' });
	};

	render() {
		const { intl } = this.props;
		const { formatMessage } = intl;

		return (
			<Styling useStyles={useStyles}>
				{classes => (
					<Page title={formatMessage({ id: 'menu.settings.dark_mode.title' })} titleSize="medium">
						<List className={classes.providersList}>
							<SwitchListItem
								title={formatMessage({ id: 'menu.settings.dark_mode.automatically' })}
								name="automaticallyDarkMode"
								checked={this.state.automaticallyDarkMode}
								onChange={this.handleAutomaticallyChange}
							/>
							<Divider className={classes.divider} />
							<SwitchListItem
								title={formatMessage({ id: 'menu.settings.dark_mode.manually_enable_till_tomorrow' })}
								name="dontUseDarkMode"
								checked={this.state.dontUseDarkMode}
								onChange={this.handleDontUseChange}
							/>
							<div className={classes.textWrapper}>
								<Text className={classes.subText}>{formatMessage({ id: 'menu.settings.dark_mode.set_by_time' })}</Text>
							</div>
							<SwitchListItem
								title={formatMessage({ id: 'menu.settings.dark_mode.scheduled' })}
								name="scheduledDarkMode"
								checked={this.state.scheduledDarkMode}
								onChange={this.handleScheduledChange}
							/>

							{this.state.scheduledDarkMode && (
								<Box>
									<Divider className={classes.divider} />
									<ListItem className={classes.li}>
										<ListItemText className={classes.itemText}>{formatMessage({ id: 'menu.settings.dark_mode.start' })}</ListItemText>
										<ListItemSecondaryAction className={classes.secondaryAction}>
											<Button className={classes.secondaryButton}>
												<IonDatetime
													display-timezone="utc"
													display-format="HH:mm"
													mode="ios"
													pickerOptions={{
														cssClass: classes.customPicker,
														buttons: [
															{
																text: formatMessage({ id: 'menu.settings.dark_mode.cancel' }),
																handler: () => console.log('Cancel')
															},
															{
																text: formatMessage({ id: 'menu.settings.dark_mode.set_time' }),
																handler: () => {
																	console.log('set time');
																}
															}
														]
													}}
													picker-format="HH:mm"
													value={this.state.startTimeDarkMode}
													onIonChange={e => this.handleStartDateChange(e)}
												/>
												<Icon iconName="forward" color="rgba(24, 28, 25, 0.5)" />
											</Button>
										</ListItemSecondaryAction>
									</ListItem>
									<Divider className={classes.divider} />
									<ListItem className={classes.li}>
										<ListItemText className={classes.itemText}>{formatMessage({ id: 'menu.settings.dark_mode.ending' })}</ListItemText>
										<ListItemSecondaryAction className={classes.secondaryAction}>
											<Button className={classes.secondaryButton}>
												<IonDatetime
													display-timezone="utc"
													display-format="HH:mm"
													mode="ios"
													pickerOptions={{
														cssClass: classes.customPicker,
														buttons: [
															{
																text: formatMessage({ id: 'menu.settings.dark_mode.cancel' }),
																handler: () => console.log('Cancel')
															},
															{
																text: formatMessage({ id: 'menu.settings.dark_mode.set_time' }),
																handler: () => {
																	console.log('set time');
																}
															}
														]
													}}
													picker-format="HH:mm"
													value={this.state.endTimeDarkMode}
													onIonChange={e => this.handleEndDateChange(e)}
												/>
												<Icon iconName="forward" color="rgba(24, 28, 25, 0.5)" />
											</Button>
										</ListItemSecondaryAction>
									</ListItem>
									<Divider className={classes.divider} />
								</Box>
							)}
						</List>
					</Page>
				)}
			</Styling>
		);
	}
}

export const DarkMode = injectIntl(DarkModePage);
