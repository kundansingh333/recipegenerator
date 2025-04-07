import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';

function FacebookCircularProgress(props) {
  const theme = useTheme();
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: theme.palette.grey[200],
          ...theme.applyStyles('dark', {
            color: theme.palette.grey[800],
          }),
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: green[500],
          animationValue: '0deg',
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
          ...theme.applyStyles('dark', {
            color: green[700],
            animationValue: '0deg',
          }),
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

function LoadingSpinner({ darkMode }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-opacity-50 z-50">
      <FacebookCircularProgress />
      <p className={`text-xl font-semibold mt-4 ${darkMode ? 'text-[#86efad]' : 'text-[#4ade81]'} animate-pulse`}>Loading...</p>
    </div>
  );
}

export default LoadingSpinner;