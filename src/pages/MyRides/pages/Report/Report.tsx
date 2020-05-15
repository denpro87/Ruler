import { Box, Input, InputAdornment, InputLabel, makeStyles } from '@material-ui/core';
import { Icon, IconButton, Image, Page, Text } from 'components';
import { IonImg } from '@ionic/react';
import { getTopPosition, styles } from './Report.styles';
import { useIntl } from 'react-intl';
import React from 'react';
import clsx from 'clsx';
const useStyles = makeStyles(styles);

export const Report: React.FunctionComponent = () => {
	const classes = useStyles();
	const { formatMessage } = useIntl();
	const [msg, setMsg] = React.useState('');
	const [rowsNum, setRowsNum] = React.useState(0);
	const [imagesReady, setImagesReady] = React.useState(false);
	const [selectedFiles, setSelectedFiles] = React.useState<(string | ArrayBuffer | null)[]>([]);
	const [messages, setMessages] = React.useState<any[]>([]);
	const handleMsgChange = (event: React.ChangeEvent<HTMLInputElement>): void => setMsg(event.target.value);

	const handleUploadClick = (event: any) => {
		setImagesReady(true);
		const files = event.target.files;

		for (const file of files) {
			const reader = new FileReader();
			const url = reader.readAsDataURL(file);

			reader.onloadend = () => {
				setSelectedFiles(prevFiles => [...prevFiles, reader.result]);
			};
		}
	};
	React.useEffect(() => {
		let temp = 0;
		temp = selectedFiles.length / Math.floor((window.innerWidth - 40 - 50) / 100);

		if (selectedFiles.length % Math.floor((window.innerWidth - 40 - 50) / 100) === 0) {
			setRowsNum(temp);
		} else {
			setRowsNum(Math.floor(temp) + 1);
		}
	}, [selectedFiles]);

	const removeImage = (index: number) => (): void => {
		const temp = selectedFiles;
		temp.splice(index, 1);
		setSelectedFiles([...temp]);
	};

	const handleSendButtonClick = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
		const temp = messages;

		if (selectedFiles.length > 0) {
			temp.push(selectedFiles);
			setMessages([...temp]);
		}

		if (msg !== '') {
			temp.push(msg);
			setMessages([...temp]);
		}

		setMsg('');
		setSelectedFiles([]);
		setImagesReady(false);
	};

	React.useEffect(() => {
		console.log('asdfasdfasdf', messages);
	}, [messages]);

	return (
		<Page title={formatMessage({ id: 'my_rides.report.title' })} titleSize="medium">
			<Box className={classes.reportContainer}>
				<Box className={classes.reportContent}>
					{messages &&
						messages.map((message, index) => {
							if (typeof message === 'string') {
								return (
									<Box key={index} className={classes.sentMsgWrapper}>
										<Text className={classes.msgText}>{message}</Text>
									</Box>
								);
							} else {
								return (
									<Box className={classes.sentImagesWrapper}>
										{message.map((file: any, index: number) => {
											return (
												<Box key={index} className={classes.sentImageWrapper}>
													<IonImg className={classes.image} src={file} />
												</Box>
											);
										})}
									</Box>
								);
							}
						})}
				</Box>
				<Box className={classes.footer}>
					{imagesReady && (
						<Box
							className={classes.nonSentImagesWrapper}
							style={{
								top: getTopPosition(rowsNum)
							}}
						>
							{selectedFiles &&
								selectedFiles.map((file: any, index: number) => {
									return (
										<Box key={index} className={classes.nonSentImageWrapper}>
											<IonImg className={classes.image} src={file} />
											<IconButton className={classes.closeIcon} onClick={removeImage(index)} iconName="close" />
										</Box>
									);
								})}
						</Box>
					)}

					<Input
						disableUnderline
						multiline
						placeholder={formatMessage({ id: 'my_rides.report.message' })}
						value={msg}
						onChange={handleMsgChange}
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
						className={clsx({ [classes.messageInput]: true }, { [classes.attachIcon]: msg !== '' || selectedFiles.length > 0 })}
					/>
					<IconButton
						disabled={selectedFiles.length === 0 && msg === ''}
						className={classes.sendButton}
						iconName="submit-report"
						iconProps={{ iconName: 'submit-report', color: '#ffffff' }}
						onClick={handleSendButtonClick}
					/>
				</Box>
			</Box>
		</Page>
	);
};
