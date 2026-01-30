
import React from "react";
import { Box, Card, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import BookingChart from "../components/BookingChart";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f7fb" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />

        <Box sx={{ p: 3 }}>
          {/* BOOKING TRANSACTIONS */}
          <Card sx={{ p: 3, borderRadius: 3 }}>
            <Typography fontWeight={600} fontSize={18}>
              Booking Transactions
            </Typography>
            <Typography fontSize={14} color="gray" mb={3}>
              Transaction Details For Last 7 Days.
            </Typography>

            <BookingChart />
          </Card>
        </Box>

        {/* FOOTER */}
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
            <b style={{ color: "#2563eb" }}>
              Great Lakes PickleBall Club
            </b>{" "}
            2026
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
