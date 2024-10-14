import React from 'react';
import { useState, useContext } from "react";
import {
  Box,
  IconButton,
  useTheme,
  Typography,
  Drawer,
  Divider,
  ListItemAvatar,
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import UpdateIcon from "@mui/icons-material/Update";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import StarIcon from "@mui/icons-material/Star";
import WarningIcon from "@mui/icons-material/Warning";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";

const pastelColors = [
  "#FFB3BA",
  "#FFDFBA",
  "#FFFFBA",
  "#BAFFC9",
  "#BAE1FF",
  "#FFABAB",
];

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Mock data for notifications and contacts
  const notifications = [
    {
      id: 1,
      text: "You have a bug that needs fixing",
      icon: <BugReportOutlinedIcon />,
      time: "Just now",
    },
    {
      id: 2,
      text: "New user registered",
      icon: <PersonAddOutlinedIcon />,
      time: "59 minutes ago",
    },
    {
      id: 3,
      text: "Andi Lane subscribed to you",
      icon: <SubscriptionsOutlinedIcon />,
      time: "Today, 11:59 AM",
    },
  ];

  const activities = [
    {
      id: 1,
      text: "You have a bug that needs fixing",
      icon: <AssignmentTurnedInOutlinedIcon />,
      time: "Just now",
    },
    {
      id: 2,
      text: "Released a new version",
      icon: <UpdateIcon />,
      time: "59 minutes ago",
    },
    {
      id: 3,
      text: "Submitted a bug",
      icon: <BugReportOutlinedIcon />,
      time: "12 hours ago",
    },
    {
      id: 4,
      text: "Modified data in Page X",
      icon: <AssignmentTurnedInOutlinedIcon />,
      time: "Today, 11:59 AM",
    },
    {
      id: 5,
      text: "Deleted a page in Project X",
      icon: <WarningIcon />,
      time: "Feb 2, 2023",
    },
  ];

  const contacts = [
    { id: 1, name: "Natali Craig", avatarText: "NC" },
    { id: 2, name: "Drew Cano", avatarText: "DC" },
    { id: 3, name: "Orlando Diggs", avatarText: "OD" },
    { id: 4, name: "Andi Lane", avatarText: "AL" },
    { id: 5, name: "Kate Morrison", avatarText: "KM" },
    { id: 6, name: "Koray Okumus", avatarText: "KO" },
  ];

  const pendingNotifications = notifications.length;

  // Function to handle drawer toggle
  const toggleNotificationDrawer = (open) => () => {
    setIsNotificationOpen(open);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      alignItems="center"
      paddingBottom="5px"
    >
      <Box display="flex" flex={0.2} justifyContent="space-around">
        <IconButton>
          <StarIcon />
        </IconButton>
        <Typography
          display="flex"
          alignItems="center"
          variant="h5"
          color={colors.grey[100]}
        >
          DashBoard / Default
        </Typography>
      </Box>

      {/* Right Side: Search and Icons */}
      <Box display="flex" flex={0.3} justifyContent="space-around">
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="10px"
          marginRight="5px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>

        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <UpdateIcon />
        </IconButton>

        {/* Notification Icon with Badge */}
        <IconButton onClick={toggleNotificationDrawer(true)}>
          <Badge badgeContent={pendingNotifications} color="error">
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>

        <IconButton onClick={toggleNotificationDrawer(true)}>
          <ViewSidebarIcon />
        </IconButton>

        {/* Notification Drawer */}
        <Drawer
          anchor="right"
          open={isNotificationOpen}
          onClose={toggleNotificationDrawer(false)}
          transitionDuration={{ enter: 300, exit: 300 }}
        >
          <Box width="300px" p={4} justifyContent="center" alignItems="center">
            {/* Notifications Section */}
            <Typography variant="h5" sx={{ mb: 2 }}>
              Notifications
            </Typography>
            <Divider />
            <List>
              {notifications.map((notification) => (
                <ListItem key={notification.id}>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        width: 30,
                        height: 30,
                        backgroundColor:
                          pastelColors[
                            Math.floor(Math.random() * pastelColors.length)
                          ],
                        color: colors.primary[500],
                      }}
                    >
                      {notification.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={notification.text}
                    secondary={notification.time}
                  />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ mt: 2 }} />

            {/* Activities Section */}
            <Typography variant="h5" sx={{ mt: 2 }}>
              Activities
            </Typography>
            <List>
              {activities.map((activity) => (
                <ListItem key={activity.id}>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        width: 30,
                        height: 30,
                        backgroundColor:
                          pastelColors[
                            Math.floor(Math.random() * pastelColors.length)
                          ],
                        color: colors.primary[500],
                      }}
                    >
                      {activity.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={activity.text}
                    secondary={activity.time}
                  />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ mt: 2 }} />

            {/* Contacts Section */}
            <Typography variant="h5" sx={{ mt: 2 }}>
              Contacts
            </Typography>
            <List>
              {contacts.map((contact) => (
                <ListItem key={contact.id}>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        height: 30,
                        width: 30,
                        backgroundColor:
                          pastelColors[contact.id % pastelColors.length],
                        color: colors.primary[500],
                        fontWeight: "bold",
                      }}
                    >
                      {contact.avatarText}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={contact.name} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Topbar;
