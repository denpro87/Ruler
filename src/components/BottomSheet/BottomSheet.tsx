import { IBottomSheetProps } from './BottomSheet.types';
import { LightGreenButton } from 'components';
import { Typography, makeStyles } from '@material-ui/core';
import { pxToRem } from 'styles';
import { styles } from './BottomSheet.styles';
// @ts-ignore
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

import React from 'react';

const useStyles = makeStyles(styles);

export const BottomSheet: React.FunctionComponent<IBottomSheetProps> = ({
	open,
	onBottomSheetChange,
	onBadlyClick,
	onDamagedClick,
	onContactClick
}) => {
	const classes = useStyles();

	return (
		<div className={classes.sheetContainer}>
			<SwipeableBottomSheet
				bodyStyle={{ borderTopLeftRadius: pxToRem(15), borderTopRightRadius: pxToRem(15) }}
				open={open}
				onChange={onBottomSheetChange}
			>
				<div className={classes.sheetWrapper}>
					<div className={classes.blackBar}></div>
					<Typography className={classes.sheetTitle}>Anything wrong?</Typography>
					<Typography className={classes.sheetText}>Let us know! We are here for you 24/7</Typography>
					<LightGreenButton className={classes.sheetButton} iconName="badly-parked-vehicle" onClick={onBadlyClick}>
						Report a badly parked vehicle
					</LightGreenButton>
					<LightGreenButton className={classes.sheetButton} iconName="damaged-vehicle" onClick={onDamagedClick}>
						The vehicle is damaged
					</LightGreenButton>
					<LightGreenButton className={classes.sheetButton} iconName="support" onClick={onContactClick}>
						Contact Ruler
					</LightGreenButton>
				</div>
			</SwipeableBottomSheet>
		</div>
	);
};
