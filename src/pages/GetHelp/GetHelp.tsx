import { IonActionSheet } from '@ionic/react';
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
    href: '/gethelp/contactus'
  },
  {
    title: 'Add report',
    // href: '/gethelp/add-report'
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
  const [showAddReport, setShowAddReport] = React.useState(false);

  const onHandleAddReport = () => {
    setShowAddReport(true);
  }
	return (
		<>
			<Page title="Get help" titleSize="large">
        <Stack horizontalAlign="stretch" grow={1} tokens={{ childrenGap: 0 }} verticalFill>
          {
            items.map((item, index) => (
              <Stack.Item key={index}>
                {
                  index > 0 &&
                    <Divider className={classes.menuItemUnderLine} />
                }
                <SidebarMenuItem
                  className={classes.menuItem}
                  title={item.title}
                  href={item.href}
                  onClick={() => index === 4 ? onHandleAddReport() : null}
                />
              </Stack.Item>
            ))
          }
        </Stack>
        <div className={classes.buttonWrapper}>
          <Button className={classes.bigButton} onClick={() => history.goBack()}>Back</Button>
        </div>
        <IonActionSheet
          isOpen={showAddReport}
          cssClass='gethelp-action-sheet'
          onDidDismiss={() => setShowAddReport(false)}
          header="Anything wrong?"
          buttons={[{
              text: 'Let us know! We are here for your 24/7',
              role: 'destructive',
              cssClass: 'gethelp-action-title',
            },
            {
            text: 'Report a badly parked vehicle',
            // role: 'destructive',
            cssClass: 'gethelp-action-button gethelp-action-dadly-button',
            handler: () => {
              console.log('badly parked');
            }
          }, {
            text: 'The vehicle is damaged',
            cssClass: 'gethelp-action-button gethelp-action-damage-button',
            handler: () => {
              console.log('vehicle is damaged.');
            }
          }, {
            text: 'Contact Ruler',
            cssClass: 'gethelp-action-button gethelp-action-ruler-button',
            handler: () => {
              console.log('contact ruler');
            }
          }]}
        >
      </IonActionSheet>
			</Page>
		</>
	);
};
