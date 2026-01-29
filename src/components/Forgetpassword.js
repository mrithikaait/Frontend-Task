import React from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";

const ForgotPassword = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ width: 420, borderRadius: 3, boxShadow: 3 }}>
        <CardContent sx={{ p: 4 }}>
          
          {/* Logo */}
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <img
              src="https://images.vexels.com/media/users/3/212847/isolated/preview/341051af4de838b81202c499d4c668b0-only-play-pickleball-paddle-round-badge.png?w=360"
              alt="logo"
              width="70"
            />
          </Box>

          {/* Title */}
          <Typography
            align="center"
            sx={{ fontSize: 18, fontWeight: 600, mb: 1 }}
          >
            Forgot Password
          </Typography>

          {/* Subtitle */}
          <Typography
            align="center"
            sx={{ fontSize: 14, color: "gray", mb: 3 }}
          >
            Enter your registered email to receive a reset link
          </Typography>

          {/* Email Label */}
          <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
            Email <span style={{ color: "red" }}>*</span>
          </Typography>

          {/* Email Input */}
          <TextField
            fullWidth
            placeholder="Enter Your Email"
            size="small"
          />

          {/* Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              py: 1.2,
              backgroundColor: "#dbe4ff",
              color: "#1e40af",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#c7d2fe",
              },
            }}
          >
            Send Reset Link
          </Button>

          {/* Footer link */}
          <Typography align="center" sx={{ mt: 3, fontSize: 14 }}>
            Remembered your password?{" "}
            <Link href="#" underline="none">
              Sign In
            </Link>
          </Typography>

        </CardContent>
      </Card>
    </Box>
  );
};

export default ForgotPassword;
