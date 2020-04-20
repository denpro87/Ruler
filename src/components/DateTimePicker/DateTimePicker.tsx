import { GreenButton, LightGreenButton } from 'components';
import { IDateTimePickerProps } from './DateTimePicker.types';
import { IonPickerColumn } from '@ionic/react';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import { PickerColumn } from '@ionic/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { Scrollbars } from 'react-custom-scrollbars';
import { styles } from './DateTimePicker.styles';
import React from 'react';

const useStyles = makeStyles(styles);
const hoursOptions = [];
const minsOptions = [];

for (let i = 0; i < 60; i++) {
	if (i < 24) {
		hoursOptions.push({ text: i.toString(), value: i.toString() });
	}
	minsOptions.push({ text: i.toString().padStart(2, '0'), value: i.toString().padStart(2, '0') });
}
const hoursColumn = {
	name: 'Hours',
	options: hoursOptions
} as PickerColumn;
const minsColumn = {
	name: 'Hours',
	options: minsOptions
} as PickerColumn;

export const DateTimePicker: React.FunctionComponent<IDateTimePickerProps> = ({ open, handleRequestClose, handleTopReached }) => {
	const classes = useStyles({ open });

	const handleClickOverlay = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.preventDefault();
		handleRequestClose();
	};

	const getContent = () => {
		return (
			<div className={classes.sheetWrapper}>
				<div className={classes.blackBar}></div>
				<div className={classes.pickerColumnWrapper}>
					<IonPickerColumn col={hoursColumn} />
					<IonPickerColumn col={minsColumn} />
					<div className={classes.selectedRow}></div>
				</div>
				<div className={classes.buttonWrapper}>
					<LightGreenButton className={classes.button}>Cancel</LightGreenButton>
					<GreenButton className={classes.button}>Set time</GreenButton>
				</div>
			</div>
		);
	};

	const getStyles = () => {
		return {
			root: {
				height: '100vh',
				width: '100vw',
				position: 'fixed',
				zIndex: 1300,
				left: 0,
				top: 0,
				backgroundColor: 'rgba(0,0,0,0.2)',
				transition: 'opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)',
				pointerEvents: open ? null : 'none',
				opacity: open ? '1' : '0'
			}
		};
	};

	return (
		<Scrollbars autoHide style={getStyles().root} onClick={handleClickOverlay}>
			<Paper className={classes.body} onClick={e => e.stopPropagation()}>
				<div className={classes.content}>{getContent()}</div>
			</Paper>
		</Scrollbars>
	);
};
