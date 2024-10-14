// import React from 'react';
// import { useTheme } from '@mui/material';



// const FilledTube = ({ revenue }) => {
//   const theme = useTheme();

//   // Calculate the percentage width based on the revenue
//   const maxRevenue = 100; 
//   const width = `${Math.min((revenue / maxRevenue) * 100, 100)}%`; 

//   return (
//     <div
//       style={{
//         width: '100%',
//         height: '5px',
//         backgroundColor: theme.palette.grey[300],
//         borderRadius: '5px', 
//         overflow: 'hidden', 
//       }}
//     >
//       <div
//         style={{
//           width: width, 
//           height: '100%', 
//           backgroundColor: revenue < 300
//             ? "black" 
//             : revenue < 700
//             ? theme.palette.warning.main 
//             : theme.palette.success.main, 
//           borderRadius: '5px', 
//           transition: 'width 0.3s ease', 
//         }}
//       />
//     </div>
//   );
// };

// export default FilledTube;
