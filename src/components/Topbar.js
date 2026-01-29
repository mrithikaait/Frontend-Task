import {
  Box,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";

const Topbar = () => {
  return (
    <Box
      sx={{
        height: 64,
        bgcolor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 3,
        boxShadow: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <HomeIcon color="primary" />
        <Typography variant="h6" fontWeight={600}>
          Dashboard
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar />
        <Box>
          <Typography fontSize={14} fontWeight={600}>
            Admin User
          </Typography>
          <Typography fontSize={12} color="gray">
            Admin
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
