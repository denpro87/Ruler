import { Button, makeStyles, Box, Typography } from '@material-ui/core';
import { Page, BlackIcon } from 'components';
import { styles } from '../GetHelp.styles';

import React from 'react';

const useStyles = makeStyles(styles);
const info = {
  phoneNumber: '+123 456 789 00',
  email: 'ruleremail@gmail.com',
  address: 'Na Hrebenkach 2, 150 00 praha 5'
}

export const FaqFooter: React.FunctionComponent = () => {
  const classes = useStyles();

	return (
    <div className={classes.faqFooter}>
      <Box className={classes.li}>
        <BlackIcon iconName='support'></BlackIcon>
        <Typography variant="h6">Ruler Support</Typography>
      </Box>
      <Box className={classes.li}>
        <BlackIcon iconName='ride-history'></BlackIcon>
        <Typography variant="h6">Nov 24</Typography>
      </Box>
    </div>
  );
};