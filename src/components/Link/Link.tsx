import { ILinkProps } from './Link.types';
import { Text } from 'components';
import { linkText } from './Link.styles';
import React from 'react';

export const Link: React.FunctionComponent<ILinkProps> = ({ href, onClick, children }) => {
	if (onClick) {
		onClick = e => {
			e.preventDefault();

			return onClick?.(e);
		};
	}

	return (
		<Text
			component="a"
			componentProps={{
				href,
				onClick
			}}
			inheritStyles
			textStyles={linkText}
		>
			{children}
		</Text>
	);
};
