import React, { Fragment } from 'react';
import { Rectangle, Box, Circle, Line, Text, Image, Button, Headline } from 'elemental-react';

import AppBar from '../components/AppBar';
import InputField from '../components/InputField';
import TextInput from '../components/TextInput';
import Select from '../components/Select';


const Home = () => (
  <Fragment>
    <Box bg="white" height={640}>
      <AppBar bg="#0561f5">
        <AppBar.MenuIcon />
        <Headline level={5} color="white" bold flex={1} ml={3} mb={0}>
          The Blog
        </Headline>
      </AppBar>
      <Box height={154} bg="#efefef" justifyContent="center" alignItems="center">
      </Box>
      <Box p={16} justifyContent="center" alignItems="center">
        <InputField label="Your Name" mb={2}>
          {({ label, value }) => <TextInput label={label} value={value} />}
        </InputField>
        <InputField label="Email" mb={2}>
          {({ label, value }) => <TextInput label={label} value={value} />}
        </InputField>
        <InputField label="Date of Birth" value={{ day: '', month: '', year: '' }} mb={2}>
          {({ label, value }) => (
            <Box flexDirection="row">
              <Select flex={1} mr={3} label="Day" value={value.day} />
              <Select flex={2} mr={3} label="Month" value={value.month} />
              <Select flex={1} label="Year" value={value.year} />
            </Box>
          )}
        </InputField>
        <Box height={64} />

        <Button bg="white" borderWidth={3} height={64} width={248} borderColor="#0561f5">
          <Text color="#0561f5" fontSize={28} fontFamily="Varela">
            SUBMIT
          </Text>
        </Button>
      </Box>
    </Box>
  </Fragment>
);

export default Home;
