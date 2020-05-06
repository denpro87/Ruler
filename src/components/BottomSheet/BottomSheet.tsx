import { IBottomSheetProps } from './BottomSheet.types';
import { Typography, makeStyles } from '@material-ui/core';
import { pxToRem } from 'styles';
import { styles } from './BottomSheet.styles';
import BackdropFilter from 'react-backdrop-filter';
import React from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
const useStyles = makeStyles(styles);

export const BottomSheet: React.FunctionComponent<IBottomSheetProps> = ({
	open,
	darkMode,
	onBottomSheetChange,
	children,
	title,
	description
}) => {
	const classes = useStyles({ darkMode });

	return (
		<div className={classes.sheetContainer}>
			{darkMode ? (
				<SwipeableBottomSheet
					bodyStyle={{ borderTopLeftRadius: pxToRem(15), borderTopRightRadius: pxToRem(15) }}
					overlayStyle={{ background: '#181c19', opacity: open ? 0.4 : 0 }}
					open={open}
					onChange={onBottomSheetChange}
				>
					<div className={classes.outsideWrapper} />
					<BackdropFilter filter="blur(40px)">
						<div className={classes.sheetWrapper}>
							<div className={classes.topWrapper}>
								<div className={classes.blackBar} />
								{title && <Typography className={classes.sheetTitle}>{title}</Typography>}
								{description && <Typography className={classes.sheetDescription}>{description}</Typography>}
							</div>
							{children}
						</div>
					</BackdropFilter>
				</SwipeableBottomSheet>
			) : (
				<SwipeableBottomSheet
					bodyStyle={{ borderTopLeftRadius: pxToRem(15), borderTopRightRadius: pxToRem(15) }}
					overlayStyle={{ background: '#181c19', opacity: open ? 0.4 : 0 }}
					open={open}
					onChange={onBottomSheetChange}
				>
					<div className={classes.sheetWrapper}>
						<div className={classes.topWrapper}>
							<div className={classes.blackBar} />
							{title && <Typography className={classes.sheetTitle}>{title}</Typography>}
							{description && <Typography className={classes.sheetDescription}>{description}</Typography>}
						</div>
						{children}
					</div>
				</SwipeableBottomSheet>
			)}
		</div>
	);
};
