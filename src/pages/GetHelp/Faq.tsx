import { Page, SidebarMenuItem, SearchBox } from 'components';
import { makeStyles, Typography } from '@material-ui/core';
import { Stack } from '@fluentui/react';
import { styles } from './GetHelp.styles';

import React from 'react';

const useStyles = makeStyles(styles);
const defaultQuestions = [
  {
    title: 'Finding a bike or vehicle',
    href: '/gethelp/faq/finding',
    type: 'basics'
  },
  {
    title: 'How canI unlock a bike/vehicle?',
    href: '/gethelp/faq/unlock',
    type: 'basics'
  },
  {
    title: 'I have unlocked the scooter. How can I start the ride?',
    href: '/gethelp/faq/start',
    type: 'basics'
  },
  {
    title: 'The trip is finished. How do I park?',
    href: '/gethelp/faq/park',
    type: 'basics'
  },
  {
    title: 'I am done with the parking. How do I lock?',
    href: '/gethelp/faq/lock',
    type: 'basics'
  },
  {
    title: 'So what are the ride zones?',
    href: '/gethelp/faq/zones',
    type: 'basics'
  },
  {
    title: 'How do I pause a trip?',
    href: '/gethelp/faq/pause',
    type: 'basics'
  },
  {
    title: 'Tortor pretium viverra suspendisse?',
    href: '/gethelp/faq/pretium',
    type: 'pricing'
  }
];

const types = [
  {
    type: 'basics',
    title: 'Rider basics'
  },
  {
    type: 'pricing',
    title: 'Pricing & payment'
  }
];

export const Faq: React.FunctionComponent = () => {
  const classes = useStyles();
  const [questions, setQuestions] = React.useState(defaultQuestions);

  const filter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keywords = event.target.value.toLowerCase();
    const filteredQuestions = defaultQuestions.filter(item => item.title.toLowerCase().includes(keywords.toLowerCase()));
    setQuestions(filteredQuestions);
	};

	return (
    <>
      <Page title="FAQ" titleSize="medium">
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
