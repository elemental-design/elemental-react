import React, { Fragment } from 'react';
import { Rectangle, Box, Circle, Line, Text, Image, Button, Headline } from 'elemental-react/dist/sketchBundle.js';

import AppBar, { MenuIcon, ActionButton } from '../components/AppBar';
import InputField from '../components/InputField';
import TextInput from '../components/TextInput';
import Select from '../components/Select';

import BarChart from '../components/BarChart';


const Home = () => (
  <Fragment>
    <Box bg="white">
      <AppBar bg="#0561f5">
        <AppBar.MenuIcon />
        <Headline level={5} color="white" bold flex={1} ml={3} mb={0}>
          The Blog
        </Headline>
      </AppBar>
      <Box height={154} bg="#efefef" justifyContent="center" alignItems="center">
      </Box>
      <Box p={16} justifyContent="center" alignItems="center">
        <BarChart width={200} height={200} />
      </Box>
    </Box>
  </Fragment>
);

export default Home;
