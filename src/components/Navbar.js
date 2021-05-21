import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';



import Drawer from './Drawer'
// компонент навигации
export default function MenuAppBar() {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Drawer />
      </AppBar>
    </Box>
  );
}