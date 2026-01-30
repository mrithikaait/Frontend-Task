import React from "react";
import { Box, Grid, Card, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";

import EventIcon from "@mui/icons-material/Event";
import ClassIcon from "@mui/icons-material/Class";
import SportsIcon from "@mui/icons-material/Sports";
import PaidIcon from "@mui/icons-material/Paid";
import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import DashboardCards from "../components/DashboardCards";


const Dashboard = () => {
 
  return (
   
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f7fb" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />

        <Box sx={{ p: 3 }}>
          {/* ===== STAT CARDS (2 ROW × 2 COLUMN) ===== */}
          <Grid container spacing={3}>
  <Grid item xs={12} md={6}>
    <StatCard
      title="Bookings"
      value="196"
      color="#22c55e"
      icon={<EventIcon />}
    />
  </Grid>

  <Grid item xs={12} md={6}>
    <StatCard
      title="Classes"
      value="21"
      color="#a855f7"
      icon={<ClassIcon />}
    />
  </Grid>
</Grid>
<Grid container spacing={3} sx={{ mt: 3 }}>
  <Grid item xs={12} md={6}>
    <StatCard
      title="Coaches"
      value="18"
      color="#ec4899"
      icon={<SportsIcon />}
    />
  </Grid>

  <Grid item xs={12} md={6}>
    <StatCard
      title="Transactions"
      value="$51,047"
      color="#f59e0b"
      icon={<PaidIcon />}
    />
  </Grid>
</Grid>


          {/* ===== BOOKING TRANSACTIONS ===== */}
          <Card sx={{ mt: 4, p: 3, borderRadius: 3 }}>
            

            <MuiLink
  component={RouterLink}
  to="/booking"
  underline="none"
  color="inherit"
  fontWeight={600}
>
  Booking Transactions
</MuiLink>

            <Typography fontSize={14} color="gray">
              Transaction Details For Last 7 Days.
            </Typography>
          </Card>
        </Box>

        {/* ===== FOOTER ===== */}
        <Box
          sx={{
            mt: "auto",
            py: 2,
            textAlign: "center",
            bgcolor: "#fff",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <Typography fontSize={14} color="gray">
            Copyright © Designed & Developed by{" "}
            <b>Great Lakes PickleBall Club</b> 2026
          </Typography>
        </Box>
      </Box>
    </Box>
    
  );
};

export default Dashboard;

