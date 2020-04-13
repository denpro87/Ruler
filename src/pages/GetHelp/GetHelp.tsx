import { Divider, Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Page, SidebarMenuItem } from 'components';
import { Stack } from '@fluentui/react';
import { styles } from './GetHelp.styles';

import React from 'react';

const useStyles = makeStyles(styles);

const items = [
  {
    title: 'Safety regulations',
    href: '/gethelp/regulations'
  },
  {
    title: 'How to ride',
    href: '/gethelp/ride'
  },
  {
    title: 'FAQ',
    href: '/gethelp/faq'
  },
  {
    title: 'Contact us',
    href: '/gethelp/contact'
  },
  {
    title: 'Add report',
    href: '/gethelp/add-report'
  },
  {
    title: 'My reports',
    href: '/gethelp/my-reports'
  },
  {
    title: 'Privacy Policy',
    href: '/gethelp/privacy-policy'
  }
]
export const GetHelp: React.FunctionComponent = () => {

  const classes = useStyles();
  const history = useHistory();
	return (
		<>
			<Page title="Get help" titleSize="large">
        <Stack horizontalAlign="stretch" grow={1} tokens={{ childrenGap: 0 }} verticalFill>
          {
            items.map((item, index) => (
              <Stack.Item key={index}>
                <SidebarMenuItem className={classes.menuItem} title={item.title} href={item.href} />
                <Divider />
              </Stack.Item>
            ))
          }
        </Stack>
        <Button className={classes.bigButton} onClick={() => history.goBack()}>Back</Button>
			</Page>
		</>
	);
};
