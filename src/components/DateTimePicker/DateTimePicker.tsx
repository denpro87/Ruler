import { GreenButton, LightGreenButton } from 'components';
import { IDateTimePickerProps } from './DateTimePicker.types';
import { IonPickerColumn } from '@ionic/react';
import { Paper, makeStyles } from '@material-ui/core';
import { PickerColumn } from '@ionic/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { Scrollbars } from 'react-custom-scrollbars';
import { styles } from './DateTimePicker.styles';
import React, { useRef } from 'react';

const useStyles = makeStyles(styles);
const hoursOptions: { text: string; value: string }[] = [];
const minsOptions: { text: string; value: string }[] = [];

for (let i = 0; i < 60; i++) {
	if (i < 24) {
		hoursOptions.push({ text: i.toString(), value: i.toString() });
	}
	minsOptions.push({ text: i.toString().padStart(2, '0'), value: i.toString().padStart(2, '0') });
}

export const DateTimePicker: React.FunctionComponent<IDateTimePickerProps> = ({
	open,
	hourIndex,
	minIndex,
	handleRequestClose,
	handleDatePickerChange
}) => {
	const classes = useStyles({ open });
	const hoursRef = useRef<HTMLIonPickerColumnElement>(null);
	const minsRef = useRef<HTMLIonPickerColumnElement>(null);
	const hoursColumn = {
		name: 'Hours',
		options: hoursOptions,
		selectedIndex: hourIndex
	} as PickerColumn;
	const minsColumn = {
		name: 'Hours',
		options: minsOptions,
		selectedIndex: minIndex
	} as PickerColumn;

	const handleClickOverlay = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.preventDefault();
		handleRequestClose();
	};

	const onSetClick = () => {
		const hour = hoursRef.current?.col.selectedIndex;
		const min = minsRef.current?.col.selectedIndex;

		if (hour && min) handleDatePickerChange(hour, min);
	};

	const onCancelClick = () => {
		handleRequestClose();
	};

	const getContent = () => {
		return (
			<div className={classes.sheetWrapper}>
				<div className={classes.blackBar}></div>
				<div className={classes.pickerColumnWrapper}>
					<IonPickerColumn ref={hoursRef} col={hoursColumn} />
					<IonPickerColumn ref={minsRef} col={minsColumn} />
					<div className={classes.selectedRow}></div>
				</div>
				<div className={classes.buttonWrapper}>
					<LightGreenButton className={classes.button} onClick={onCancelClick}>
						Cancel
					</LightGreenButton>
					<GreenButton className={classes.button} onClick={onSetClick}>
						Set time
					</GreenButton>
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
