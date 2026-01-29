import React from "react";
import { Box, Card, CardContent, Typography, Avatar } from "@mui/material";

const StatCard = ({ title, value, icon, color }) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        position: "relative",
        backgroundColor: "#fff",
      }}
    >
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar
          sx={{
            bgcolor: color,
            width: 56,
            height: 56,
          }}
        >
          {icon}
        </Avatar>

        <Box>
          <Typography fontSize={14} color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h5" fontWeight={700}>
            {value}
          </Typography>
        </Box>
      </CardContent>

      {/* Bottom color bar */}
      <Box
        sx={{
          height: 4,
          bgcolor: color,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}
      />
    </Card>
  );
};

export default StatCard;
