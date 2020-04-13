import { Page, SidebarMenuItem } from 'components';
import { Stack } from '@fluentui/react';

import React from 'react';

export const GetHelp: React.FunctionComponent = () => {

	return (
		<>
			<Page title="Get help" titleSize="large">
				<Stack horizontalAlign="stretch" grow={1} tokens={{ childrenGap: 0 }} verticalFill>
					<Stack.Item>
						<SidebarMenuItem title="Safety regulations" href="/settings/profile" />
					</Stack.Item>
					<Stack.Item>
						<SidebarMenuItem title="How to ride" href="/settings/notifications" />
					</Stack.Item>
					<Stack.Item>
						<SidebarMenuItem title="FAQ" href="/gethelp/faq" />
					</Stack.Item>
					<Stack.Item>
						<SidebarMenuItem title="Contact us" href="/settings/languages" />
					</Stack.Item>
					<Stack.Item>
						<SidebarMenuItem title="Add report" href="/settings/change-password" />
          </Stack.Item>
          <Stack.Item>
						<SidebarMenuItem title="My reports" href="/settings/change-password" />
          </Stack.Item>
          <Stack.Item>
						<SidebarMenuItem title="Privacy Policy" href="/settings/change-password" />
					</Stack.Item>
				</Stack>
			</Page>
		</>
	);
};
