import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import ClassIcon from "@mui/icons-material/Class";
import BookOnlineIcon from "@mui/icons-material/BookOnline";

const Sidebar = () => {
  return (
    <Box sx={{ width: 260, bgcolor: "#fff", height: "100vh", boxShadow: 1 }}>
      
      {/* Logo */}
      <Box sx={{ textAlign: "center", py: 3 }}>
        <Avatar
          src="https://images.vexels.com/media/users/3/212847/isolated/preview/341051af4de838b81202c499d4c668b0-only-play-pickleball-paddle-round-badge.png?w=360"
          sx={{ width: 80, height: 80, margin: "auto" }}
        />
      </Box>

      <List>
        <ListItemButton selected sx={{ borderRadius: 2, mx: 1 }}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton sx={{ mx: 1 }}>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="User Management" />
        </ListItemButton>

        <ListItemButton sx={{ mx: 1 }}>
          <ListItemIcon><BusinessIcon /></ListItemIcon>
          <ListItemText primary="Club Management" />
        </ListItemButton>

        <ListItemButton sx={{ mx: 1 }}>
          <ListItemIcon><ClassIcon /></ListItemIcon>
          <ListItemText primary="Class Management" />
        </ListItemButton>

        <ListItemButton sx={{ mx: 1 }}>
          <ListItemIcon><BookOnlineIcon /></ListItemIcon>
          <ListItemText primary="Booking" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
