import React, { useState } from "react";
import PropTypes from 'prop-types'; 
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import PagesOutlinedIcon from '@mui/icons-material/PagesOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      {!isCollapsed && <Typography>{title}</Typography>}
      <Link to={to} />
    </MenuItem>
  );
};


Item.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [openDropdown, setOpenDropdown] = useState({
    dashboard: false,
    pages: false,
    charts: false,
  });

  const toggleDropdown = (section) => {
    setOpenDropdown((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleCollapseToggle = () => {
    if (!isCollapsed) {
      setOpenDropdown({
        dashboard: false,
        pages: false,
        charts: false,
      });
    }
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `white !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: isCollapsed ? "5px 15px" : "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={handleCollapseToggle}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                ml="15px"
              >
                <IconButton onClick={handleCollapseToggle}>
                  <MenuOutlinedIcon />
                </IconButton>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  margin={1}
                >
                  <img
                    alt="profile-user"
                    width="25px"
                    height="25px"
                    src={`../../assets/user.png`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h4"
                    color={colors.grey[100]}
                    fontWeight="bold"
                  >
                    byeWind
                  </Typography>
                </Box>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? "5px" : "10%"}>
            {/* Dashboard Section */}
            <Box>
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
                onClick={() => toggleDropdown("dashboard")}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {isCollapsed ? <DashboardCustomizeOutlinedIcon /> : "Dashboards"}
                <ArrowForwardIosIcon
                  style={{
                    fontSize: "0.75rem",
                    marginLeft: "5px",
                    transform: openDropdown.dashboard ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </Typography>

              {openDropdown.dashboard && (
                <>
                  <Item
                    title="Default"
                    to="/"
                    icon={<GridViewOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    isCollapsed={isCollapsed}
                  />
                  <Item
                    title="Electric Vehicle"
                    to="/"
                    icon={<LocalMallOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    isCollapsed={isCollapsed}
                  />
                  <Item
                    title="Projects"
                    to="/"
                    icon={<FolderOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    isCollapsed={isCollapsed}
                  />
                  <Item
                    title="Online"
                    to="/"
                    icon={<ImportContactsOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    isCollapsed={isCollapsed}
                  />
                </>
              )}
            </Box>

            {/* Pages Section */}
            <Box>
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
                onClick={() => toggleDropdown("pages")}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {isCollapsed ? <PagesOutlinedIcon /> : "Pages"}
                <ArrowForwardIosIcon
                  style={{
                    fontSize: "0.75rem",
                    marginLeft: "5px",
                    transform: openDropdown.pages ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </Typography>

              {openDropdown.pages && (
                <>
                  <Item
                    title="Customers"
                    to="/contacts"
                    icon={<PersonOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    isCollapsed={isCollapsed}
                  />
                  <Item
                    title="Team"
                    to="/team"
                    icon={<AccountBoxOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    isCollapsed={isCollapsed}
                  />
                  <Item
                    title="Calendar"
                    to="/calendar"
                    icon={<CalendarTodayOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    isCollapsed={isCollapsed}
                  />
                  <Item
                    title="Help Center"
                    to="/help"
                    icon={<HelpOutlineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    isCollapsed={isCollapsed}
                  />
                </>
              )}
            </Box>

            {/* Charts Section */}
            <Box>
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
                onClick={() => toggleDropdown("charts")}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {isCollapsed ? <AddchartOutlinedIcon /> : "Charts"}
                <ArrowForwardIosIcon
                  style={{
                    fontSize: "0.75rem",
                    marginLeft: "5px",
                    transform: openDropdown.charts ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </Typography>

              {openDropdown.charts && (
                <>
                  <Item
                    title="Line Chart"
                    to="/line"
                    icon={<TimelineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    isCollapsed={isCollapsed}
                  />
                  <Item
                    title="Bar Chart"
                    to="/bar"
                    icon={<BarChartOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    isCollapsed={isCollapsed}
                  />
                  <Item
                    title="Pie Chart"
                    to="/pie"
                    icon={<PieChartOutlineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    isCollapsed={isCollapsed}
                  />
                  <Item
                    title="Geography Chart"
                    to="/geography"
                    icon={<MapOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    isCollapsed={isCollapsed}
                  />
                </>
              )}
            </Box>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
