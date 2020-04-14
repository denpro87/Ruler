import { Page, SidebarMenuItem, SearchBox } from 'components';
import { makeStyles, Typography } from '@material-ui/core';
import { Stack } from '@fluentui/react';
import { styles } from './GetHelp.styles';

import React from 'react';

const useStyles = makeStyles(styles);
const defaultQuestions = [
  {
    title: 'Temrs & Conditions Austria - English',
    href: '/gethelp/privacy/term-aus',
    type: 'austria'
  },
  {
    title: 'Privacy Policy Austria - English',
    href: '/gethelp/privacy/policy-aus',
    type: 'austria'
  },
  {
    title: 'Temrs & Conditions France - English',
    href: '/gethelp/privacy/term-fra',
    type: 'france'
  },
  {
    title: 'Privacy Policy France - English',
    href: '/gethelp/privacy/policy-fra',
    type: 'france'
  },
  {
    title: 'Temrs & Conditions Germany - English',
    href: '/gethelp/privacy/term-ger',
    type: 'germany'
  },
  {
    title: 'Privacy Policy Germany - English',
    href: '/gethelp/privacy/policy-gem',
    type: 'germany'
  }
];

const types = [
  {
    type: 'austria',
    title: 'Austria'
  },
  {
    type: 'france',
    title: 'France'
  },
  {
    type: 'germany',
    title: 'Germany'
  }
];

export const Privacy: React.FunctionComponent = () => {
  const classes = useStyles();
  const [questions, setQuestions] = React.useState(defaultQuestions);

  const filter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keywords = event.target.value.toLowerCase();
    const filteredQuestions = defaultQuestions.filter(item => item.title.toLowerCase().includes(keywords.toLowerCase()));
    setQuestions(filteredQuestions);
	};

	return (
    <>
      <Page title="Privacy policy" titleSize="medium">
        <SearchBox className={classes.searchBox} onChange={filter} />
        {
          types.map((type, index) => {
            const typeQuestions = questions.filter(item => item.type === type.type);
            return(
              <div key={`${index}-type`}>
                {
                  typeQuestions.length > 0 &&
                    <Typography className={classes.subHeader}>{type.title}</Typography>
                }
                <Stack horizontalAlign="stretch" grow={1} tokens={{ childrenGap: 0 }} verticalFill>
                  {
                    typeQuestions.map((question, index) => (
                      <Stack.Item key={index}>
                        <SidebarMenuItem className={classes.subMenuItem} title={question.title} href={question.href} />
                      </Stack.Item>
                    ))
                  }
                </Stack>
              </div>
            )})
        }
      </Page>
		</>
	);
};
