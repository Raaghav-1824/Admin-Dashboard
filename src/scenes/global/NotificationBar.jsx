// import { useState, useContext } from "react";
// import { Box, IconButton, useTheme, Typography, Drawer, Divider, List, ListItem, ListItemAvatar, ListItemText, Avatar, Fade } from "@mui/material";
// import { ColorModeContext, tokens } from "../../theme";
// import InputBase from "@mui/material/InputBase";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchIcon from "@mui/icons-material/Search";
// import UpdateIcon from "@mui/icons-material/Update";
// import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
// import StarIcon from "@mui/icons-material/Star";
// import MailIcon from "@mui/icons-material/Mail";

// const Topbar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const colorMode = useContext(ColorModeContext);

//   const [isNotificationOpen, setIsNotificationOpen] = useState(false);

//   // Function to handle drawer toggle
//   const toggleNotificationDrawer = (open) => (event) => {
//     setIsNotificationOpen(open);
//   };

//   // Mock data for notifications and contacts
//   const notifications = [
//     { id: 1, text: "New updates available", icon: <UpdateIcon /> },
//     { id: 2, text: "Your order has been shipped", icon: <MailIcon /> },
//   ];

//   const contacts = [
//     { id: 1, name: "John Doe", message: "Hey! How's it going?", avatar: "/path/to/avatar1.jpg" },
//     { id: 2, name: "Jane Smith", message: "Don't forget our meeting tomorrow.", avatar: "/path/to/avatar2.jpg" },
//   ];

//   return (
//     <Box display="flex" justifyContent="space-between" p={2}>
//       {/* Left Side: Icons + Text */}
//       <Box display="flex">
//         <IconButton>
//           <ViewSidebarIcon />
//         </IconButton>
//         <IconButton>
//           <StarIcon />
//         </IconButton>
//         <Typography display="flex" alignItems="center" variant="h5" color={colors.grey[100]}>
//           DashBoard / Default
//         </Typography>
//       </Box>

//       {/* Right Side: Search and Icons */}
//       <Box display="flex">
//         <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="10px" marginRight="5px">
//           <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
//           <IconButton type="button" sx={{ p: 1 }}>
//             <SearchIcon />
//           </IconButton>
//         </Box>

//         <IconButton onClick={colorMode.toggleColorMode}>
//           {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
//         </IconButton>
//         <IconButton>
//           <UpdateIcon />
//         </IconButton>
        
//         {/* Notification Icon */}
//         <IconButton onClick={toggleNotificationDrawer(true)}>
//           <NotificationsOutlinedIcon />
//         </IconButton>
//         <IconButton>
//           <ViewSidebarIcon />
//         </IconButton>

//         {/* Notification Drawer */}
//         <Drawer
//           anchor="right"
//           open={isNotificationOpen}
//           onClose={toggleNotificationDrawer(false)}
//           transitionDuration={300} // Smooth transition for the drawer
//         >
//           <Box width="300px" p={2} display="flex" flexDirection="column">
//             <Typography variant="h6">Notifications</Typography>

//             {/* Divider to separate sections */}
//             <Divider sx={{ my: 2 }} />

//             {/* Notification Items */}
//             <List>
//               {notifications.map((notification) => (
//                 <Fade in={isNotificationOpen} timeout={500} key={notification.id}>
//                   <ListItem sx={{ bgcolor: colors.primary[300], borderRadius: "10px", mb: 1 }}>
//                     <ListItemAvatar>{notification.icon}</ListItemAvatar>
//                     <ListItemText primary={notification.text} />
//                   </ListItem>
//                 </Fade>
//               ))}
//             </List>

//             {/* Divider to separate notifications and contacts */}
//             <Divider sx={{ my: 2 }} />

//             {/* Mock Contact List */}
//             <Typography variant="h6">Contacts</Typography>
//             <List>
//               {contacts.map((contact) => (
//                 <Fade in={isNotificationOpen} timeout={500} key={contact.id}>
//                   <ListItem sx={{ bgcolor: colors.primary[300], borderRadius: "10px", mb: 1 }}>
//                     <ListItemAvatar>
//                       <Avatar src={contact.avatar} alt={contact.name} />
//                     </ListItemAvatar>
//                     <ListItemText primary={contact.name} secondary={contact.message} />
//                   </ListItem>
//                 </Fade>
//               ))}
//             </List>
//           </Box>
//         </Drawer>
//       </Box>
//     </Box>
//   );
// };

// export default Topbar;
// // 