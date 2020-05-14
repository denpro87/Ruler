import { Box, FormControl, Input, InputAdornment, InputLabel, makeStyles } from '@material-ui/core';
import { Button, Icon, IconButton, Page, Text, TextField } from 'components';
import { styles } from './Report.styles';
import { useIntl } from 'react-intl';
import React from 'react';
const useStyles = makeStyles(styles);

export const Report: React.FunctionComponent = () => {
	const classes = useStyles();
	const { formatMessage } = useIntl();
	const [message, setMessage] = React.useState('');
	const [selectedFiles, setSelectedFiles] = React.useState<(string | ArrayBuffer | null)[]>([]);
	const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>): void => setMessage(event.target.value);

	const handleUploadClick = (event: any) => {
		const files = event.target.files;

		for (const file of files) {
			const reader = new FileReader();
			const url = reader.readAsDataURL(file);

			reader.onloadend = () => {
				setSelectedFiles(prevFiles => [...prevFiles, reader.result]);
			};
		}
	};

	return (
		<Page title={formatMessage({ id: 'my_rides.report.title' })} titleSize="medium">
			<Box className={classes.reportContainer}>
				<Box className={classes.footer}>
					<Input
						disableUnderline
						multiline
						placeholder={formatMessage({ id: 'my_rides.report.message' })}
						value={message}
						onChange={handleMessageChange}
						startAdornment={
							<InputAdornment position="start">
								<InputLabel htmlFor="file-upload">
									<Icon iconName="attach" />
								</InputLabel>
								<input
									accept="image/*"
									className={classes.fileInput}
									multiple // Input component has not this props ?? So I used html input tag
									id="file-upload"
									type="file"
									onChange={handleUploadClick}
								/>
							</InputAdornment>
						}
						className={classes.messageInput}
					/>
					<IconButton
						// disabled
						className={classes.sendButton}
						iconName="submit-report"
						iconProps={{ iconName: 'submit-report', color: '#ffffff' }}
					/>
				</Box>
			</Box>
		</Page>
	);
};
