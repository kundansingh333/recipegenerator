// import React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
// import { green } from '@mui/material/colors';

// function FacebookCircularProgress(props) {
//   const theme = useTheme();
//   return (
//     <Box sx={{ position: 'relative' }}>
//       <CircularProgress
//         variant="determinate"
//         sx={{
//           color: theme.palette.grey[200],
//           ...theme.applyStyles('dark', {
//             color: theme.palette.grey[800],
//           }),
//         }}
//         size={40}
//         thickness={4}
//         {...props}
//         value={100}
//       />
//       <CircularProgress
//         variant="indeterminate"
//         disableShrink
//         sx={{
//           color: green[500],
//           animationValue: '0deg',
//           animationDuration: '550ms',
//           position: 'absolute',
//           left: 0,
//           [`& .${circularProgressClasses.circle}`]: {
//             strokeLinecap: 'round',
//           },
//           ...theme.applyStyles('dark', {
//             color: green[900],
//             animationValue: '0deg',
//           }),
//         }}
//         size={40}
//         thickness={4}
//         {...props}
//       />
//     </Box>
//   );
// }

// function LoadingSpinner({ darkMode }) {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-opacity-50 z-50">
//       <FacebookCircularProgress />
//       <p className={`text-xl font-semibold mt-4 ${darkMode ? 'text-green-950' : 'text-green-950'} animate-pulse`}>Generating Recipes...</p>
//     </div>
//   );
// }

// export default LoadingSpinner;







// import React from 'react';

// function LoadingSpinner({ darkMode }) {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-opacity-50 backdrop-blur-sm z-50 rounded-2xl">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="w-32 h-32 mb-4 rounded-full shadow-lg"
//       >
//         <source src="/loading.gif" type="video/gif" />
//         Your browser does not support the video tag.
//       </video>
//       <p className={`text-xl font-semibold mt-4 ${darkMode ? 'text-green-200' : 'text-green-900'} animate-pulse`}>
//         Generating Recipes...
//       </p>
//     </div>
//   );
// }

// export default LoadingSpinner;






import React from 'react';

function LoadingSpinner({ darkMode }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-opacity-50 backdrop-blur-sm z-50">
      <img
        src="/loading.gif"
        alt="Loading animation"
        className="w-32 h-32 mb-4 rounded-full "
      />
      <p className={`text-xl font-semibold ${darkMode ? 'text-green-900' : 'text-green-900'} animate-pulse`}>
        Generating Recipes...
      </p>
    </div>
  );
}

export default LoadingSpinner;
