
// import {
//   Box,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Avatar,
// } from "@mui/material";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PeopleIcon from "@mui/icons-material/People";
// import BusinessIcon from "@mui/icons-material/Business";
// import ClassIcon from "@mui/icons-material/Class";
// import BookOnlineIcon from "@mui/icons-material/BookOnline";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <Box sx={{ width: 260, bgcolor: "#fff", height: "100vh", boxShadow: 1 }}>
      
//       {/* Logo */}
//       <Box sx={{ textAlign: "center", py: 3 }}>
//         <Avatar
//           src="https://images.vexels.com/media/users/3/212847/isolated/preview/341051af4de838b81202c499d4c668b0-only-play-pickleball-paddle-round-badge.png?w=360"
//           sx={{ width: 80, height: 80, margin: "auto" }}
//         />
//       </Box>

//       <List>
//         <ListItemButton selected sx={{ borderRadius: 2, mx: 1 }}>
//           <ListItemIcon><DashboardIcon /></ListItemIcon>
//         <Link to="/dashboard"> <ListItemText primary="Dashboard" /></Link> 
//         </ListItemButton>

//         <ListItemButton sx={{ mx: 1 }}>
//           <ListItemIcon><PeopleIcon /></ListItemIcon>
//          <Link to="/user"> <ListItemText primary="User Management" /></Link> 
//         </ListItemButton>

//         <ListItemButton sx={{ mx: 1 }}>
//           <ListItemIcon><BusinessIcon /></ListItemIcon>
//           <ListItemText primary="Club Management" />
//         </ListItemButton>

//         <ListItemButton sx={{ mx: 1 }}>
//           <ListItemIcon><ClassIcon /></ListItemIcon>
//           <ListItemText primary="Class Management" />
//         </ListItemButton>

//         <ListItemButton sx={{ mx: 1 }}>
//           <ListItemIcon><BookOnlineIcon /></ListItemIcon>
//           <ListItemText primary="Booking" />
//         </ListItemButton>
//       </List>
//     </Box>
//   );
// };

// export default Sidebar;


import { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Avatar,
  Tooltip,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import ClassIcon from "@mui/icons-material/Class";
import BookOnlineIcon from "@mui/icons-material/CalendarMonth";

import { useLocation, useNavigate } from "react-router-dom";

const drawerWidthOpen = 240;
const drawerWidthClosed = 72;

const menuItems = [
  { label: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { label: "User Management", icon: <PeopleIcon />, path: "/user" },
  { label: "Club Management", icon: <BusinessIcon />, path: "/club" },
  { label: "Class Management", icon: <ClassIcon />, path: "/class" },
  { label: "Booking", icon: <BookOnlineIcon />, path: "/booking" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidthOpen : drawerWidthClosed,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidthOpen : drawerWidthClosed,
          transition: "0.3s",
          overflowX: "hidden",
          borderRight: "1px solid #eee",
        },
      }}
    >
      {/* 🔹 LOGO + TOGGLE */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "space-between" : "center",
          px: 2,
          py: 2,
        }}
      >
        <Avatar
          src="https://images.vexels.com/media/users/3/212847/isolated/preview/341051af4de838b81202c499d4c668b0-only-play-pickleball-paddle-round-badge.png"
          sx={{ width: 40, height: 40 }}
        />

        {open && (
          <IconButton onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
        )}

        {!open && (
          <IconButton onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
        )}
      </Box>

      {/* 🔹 MENU ITEMS */}
      <List sx={{ mt: 1 }}>
        {menuItems.map((item) => {
          const active = location.pathname === item.path;

          return (
            <Tooltip
              title={!open ? item.label : ""}
              placement="right"
              key={item.path}
            >
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  mx: 1,
                  my: 0.5,
                  borderRadius: 2,
                  justifyContent: open ? "initial" : "center",
                  px: open ? 2 : 1.5,
                  bgcolor: active ? "#e0ebff" : "transparent",
                  "&:hover": {
                    bgcolor: "#e0ebff",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                    color: active ? "#2563eb" : "#555",
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                {open && (
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: active ? 600 : 500,
                      color: active ? "#2563eb" : "#333",
                    }}
                  />
                )}
              </ListItemButton>
            </Tooltip>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;


