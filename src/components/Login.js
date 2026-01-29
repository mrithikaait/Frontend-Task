import React from "react";

import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

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
      <Card sx={{ width: 380, borderRadius: 3, boxShadow: 3 }}>
        <CardContent sx={{ p: 4 }}>
          
          {/* Logo */}
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <img
              src="https://images.vexels.com/media/users/3/212847/isolated/preview/341051af4de838b81202c499d4c668b0-only-play-pickleball-paddle-round-badge.png?w=360"
              alt="logo" 
              width={70}
            />
          </Box>

          <Typography
            align="center"
            sx={{ mb: 3, fontWeight: 600 }}
          >
            Sign in your account
          </Typography>

          {/* Email Label */}
          <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
            Email <span style={{ color: "red" }}>*</span>
          </Typography>

          {/* Email Input */}
          <TextField
            fullWidth
            placeholder="Enter your Email"
            size="small"
          />

          {/* Password Label */}
          <Typography sx={{ mt: 2, mb: 0.5, fontWeight: 500 }}>
            Password <span style={{ color: "red" }}>*</span>
          </Typography>

          {/* Password Input */}
          <TextField
            fullWidth
            placeholder="Enter password"
            size="small"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Remember + Forgot */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}
          >
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Remember my preference"
            />

            <Link href="#" underline="none" fontSize={14}>
              Forgot Password?
            </Link>
          </Box>

          {/* Sign In Button */}
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
            Sign In
          </Button>

        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
