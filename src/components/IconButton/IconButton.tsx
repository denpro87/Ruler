import { IIconButtonProps } from './IconButton.types';
import { IconButton as MuiIconButton } from '@material-ui/core';
import React from 'react';

export const IconButton: React.FunctionComponent<IIconButtonProps> = ({ children }) => <MuiIconButton>{children}</MuiIconButton>;
