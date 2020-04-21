import { IBottomSheetProps } from './BottomSheet.types';
import { Typography, makeStyles } from '@material-ui/core';
import { pxToRem } from 'styles';
import { styles } from './BottomSheet.styles';
import React from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

const useStyles = makeStyles(styles);

export const BottomSheet: React.FunctionComponent<IBottomSheetProps> = ({ open, onBottomSheetChange, children, title }) => {
	const classes = useStyles();

	return (
		<div className={classes.sheetContainer}>
			<SwipeableBottomSheet
				bodyStyle={{ borderTopLeftRadius: pxToRem(15), borderTopRightRadius: pxToRem(15) }}
				overlayStyle={{ background: '#181c19', opacity: open ? 0.4 : 0 }}
				open={open}
				onChange={onBottomSheetChange}
			>
				<div className={classes.sheetWrapper}>
					<div className={classes.blackBar}></div>
					{title && <Typography className={classes.sheetTitle}>Anything wrong?</Typography>}
					{children}
				</div>
			</SwipeableBottomSheet>
		</div>
	);
};
