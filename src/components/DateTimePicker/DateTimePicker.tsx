import { GreenButton, LightGreenButton } from 'components';
import { IDateTimePickerProps } from './DateTimePicker.types';
import { IonPickerColumn } from '@ionic/react';
import { Paper, makeStyles } from '@material-ui/core';
import { PickerColumn, PickerColumnOption } from '@ionic/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { Scrollbars } from 'react-custom-scrollbars';
import { getScrollbarStyles, styles } from './DateTimePicker.styles';
import React, { useRef } from 'react';

const useStyles = makeStyles(styles);

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
	const hoursOptions: PickerColumnOption[] = [];
	const minsOptions: PickerColumnOption[] = [];

	for (let i = 0; i < 60; i++) {
		if (i < 24) {
			hoursOptions.push({ text: i.toString(), value: i.toString(), transform: `translate3d(0px,${(i - hourIndex) * 38}px,0px) ` });
		}
		minsOptions.push({
			text: i.toString().padStart(2, '0'),
			value: i.toString().padStart(2, '0'),
			transform: `translate3d(0px,${(i - minIndex) * 38}px,0px) `
		});
	}
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

	// useEffect(() => {}, []);

	const handleClickOverlay = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.preventDefault();
		handleRequestClose();
	};

	const onSetClick = () => {
		const hour = hoursRef.current?.col.selectedIndex;
		const min = minsRef.current?.col.selectedIndex;
		console.log(hoursRef);

		if (hour && min) handleDatePickerChange(hour, min);
	};

	const onCancelClick = () => {
		handleRequestClose();
	};

	const getContent = () => (
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

	return (
		<Scrollbars autoHide style={getScrollbarStyles(open)} onClick={handleClickOverlay}>
			<Paper className={classes.body} onClick={e => e.stopPropagation()}>
				<div className={classes.content}>{getContent()}</div>
			</Paper>
		</Scrollbars>
	);
};
