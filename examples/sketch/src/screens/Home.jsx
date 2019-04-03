import React, { Fragment } from 'react';
import { Rectangle, Box, Circle, Line, Text, Image, Button, Headline } from 'elemental-react/dist/sketchBundle.js';

import AppBar from '../components/AppBar';
import InputField from '../components/InputField';
import TextInput from '../components/TextInput';

const Home = () => (
  <Fragment>
    <Box bg="#0561f5" height={640}>
      <AppBar bg="transparent">
        <AppBar.MenuIcon />
        <AppBar.ActionButton>
          SIGN IN
        </AppBar.ActionButton>
      </AppBar>
      <Box p={64} pt={16} pl={0} pr={0} flex={1} justifyContent="center" alignItems="center">
        <Headline color="white" level={2} center bold>
          The Blog
        </Headline>
        <Text mt={3} fontSize={24} color="white">
          We solve problems
        </Text>
      </Box>
      <Box p={48} justifyContent="center" alignItems="center">
        <InputField label="Enter your email" mb={1} width={248}>
          {({ label, value }) => <TextInput color="white" label={label} value={value} />}
        </InputField>
        <Button bg="white" height={54} width={248} borderWidth={0}>
          <Text color="#0561f5" fontSize={24}>
            SUBSCRIBE
          </Text>
        </Button>
      </Box>
    </Box>
    <Box bg="white" p={16} pt={40} height={640}>
      <Text mb={16} bold>
        RECENT POSTS
      </Text>
      {[{
        title: 'An important announcement',
        category: 'News',
        description: 'Some important information about the incorporation of this blog.',
      }, {
        title: 'Looking back',
        category: 'History',
        description: 'While checking our archives, we found some interesting data.',
      }, {
        title: 'You won\'t believe what we found',
        category: 'Trends',
        description: 'Clickbait at its finest. Please don\'t click through as this is a dummy site and it won\'t work',
      }].map(({ title, category, description }) => (
        <Box flexDirection="column" minHeight={120} paddingRight={24} mt={3} mb={3}>
          <Text color="green" bold>{category}</Text>
          <Text mt={2} mb={2} bold fontSize={24} color="#000">{title}</Text>
          <Text fontFamily="Nunito Sans" color="#797979">{description}</Text>
          <Text mt={2} fontFamily="Nunito Sans" color="#797979" fontSize={12}>
            Written by <Text fontSize={12} bold>John Smith</Text>
          </Text>
        </Box>
      ))}
    </Box>
  </Fragment>
);

export default Home;
