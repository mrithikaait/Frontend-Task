import { Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import ClassIcon from "@mui/icons-material/Class";
import BookOnlineIcon from "@mui/icons-material/CalendarMonth";

const pageConfig = {
  "/dashboard": { title: "Dashboard", icon: <DashboardIcon color="primary" /> },
  "/user": { title: "User Management", icon: <PeopleIcon color="primary" /> },
  "/club": { title: "Club Management", icon: <BusinessIcon color="primary" /> },
  "/class": { title: "Class Management", icon: <ClassIcon color="primary" /> },
  "/booking": { title: "Booking", icon: <BookOnlineIcon color="primary" /> },
};

const Header = ({ toggleSidebar }) => {
  const location = useLocation();
  const currentPage = pageConfig[location.pathname];

  return (
    <Box
      sx={{
        height: 64,
        bgcolor: "#fff",
        display: "flex",
        alignItems: "center",
        gap: 2,
        px: 3,
        boxShadow: 1,
      }}
    >
      <IconButton onClick={toggleSidebar}>
        <MenuIcon />
      </IconButton>

      {currentPage?.icon}

      <Typography variant="h6" fontWeight={600}>
        {currentPage?.title || "Dashboard"}
      </Typography>
    </Box>
  );
};

export default Header;
