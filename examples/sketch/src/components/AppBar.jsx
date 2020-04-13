import React from 'react';
import { Box, Line, Button } from 'elemental-react';



export const MenuIcon = () => (
  <Box height={22} justifyContent="space-between">
    <Line width={28} height={2} bg="white" />
    <Line width={28} height={2} bg="white" />
    <Line width={28} height={2} bg="white" />
  </Box>
);

export const ActionButton = ({ children, ...props }) => (
  <Button pl={20} pr={20} height={36} borderColor="white" fontSize={16} color="white" {...props}>
    {children}
  </Button>
)

const AppBar = ({ children, ...props }) => (
  <Box height={64} p={16} bg="black" justifyContent="space-between" flexDirection="row" alignItems="center" {...props}>
    {children}
  </Box>
);

AppBar.MenuIcon = MenuIcon;
AppBar.ActionButton = ActionButton;

export default AppBar;
