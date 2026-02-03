
// import React from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   TextField,
//   Button,
//   Typography,
//   Checkbox,
//   FormControlLabel,
//   InputAdornment,
//   IconButton,
// } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { Link as RouterLink } from "react-router-dom";

// const Login = () => {
//   const [showPassword, setShowPassword] = React.useState(false);

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         backgroundColor: "#f5f7fb",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Card sx={{ width: 380, borderRadius: 3, boxShadow: 3 }}>
//         <CardContent sx={{ p: 4 }}>
          
//           {/* Logo */}
//           <Box sx={{ textAlign: "center", mb: 2 }}>
//             <img
//               src="https://images.vexels.com/media/users/3/212847/isolated/preview/341051af4de838b81202c499d4c668b0-only-play-pickleball-paddle-round-badge.png?w=360"
//               alt="logo"
//               width={70}
//             />
//           </Box>

//           <Typography align="center" sx={{ mb: 3, fontWeight: 600 }}>
//             Sign in your account
//           </Typography>

//           {/* Email */}
//           <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
//             Email <span style={{ color: "red" }}>*</span>
//           </Typography>
//           <TextField fullWidth placeholder="Enter your Email" size="small" />

//           {/* Password */}
//           <Typography sx={{ mt: 2, mb: 0.5, fontWeight: 500 }}>
//             Password <span style={{ color: "red" }}>*</span>
//           </Typography>
//           <TextField
//             fullWidth
//             placeholder="Enter password"
//             size="small"
//             type={showPassword ? "text" : "password"}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton onClick={() => setShowPassword(!showPassword)}>
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />

//           {/* Remember + Forgot */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               mt: 1,
//             }}
//           >
//             <FormControlLabel
//               control={<Checkbox size="small" />}
//               label="Remember my preference"
//             />

//             <RouterLink
//               to="/forget"
//               style={{
//                 textDecoration: "none",
//                 fontSize: 14,
//                 color: "#2563eb",
//                 fontWeight: 500,
//               }}
//             >
//               Forgot Password?
//             </RouterLink>
//           </Box>

//           {/* Sign In Button */}
//           <Button
//             fullWidth
//             variant="contained"
//             sx={{
//               mt: 3,
//               py: 1.2,
//               backgroundColor: "#dbe4ff",
//               color: "#1e40af",
//               fontWeight: 600,
//               "&:hover": {
//                 backgroundColor: "#c7d2fe",
//               },
//             }}
//           >
//             Sign In
//           </Button>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default Login;


import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/AuthThunks"; // your redux thunk

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux state
  const { loading, error, token } = useSelector((state) => state.auth);

  // Local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Handle login
  const handleLogin = () => {
    if (!email || !password) return;
    dispatch(loginUser({ email, password }));
  };

  // Redirect after successful login
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

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

          <Typography align="center" sx={{ mb: 3, fontWeight: 600 }}>
            Sign in to your account
          </Typography>

          {/* Email */}
          <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
            Email <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your Email"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <Typography sx={{ mt: 2, mb: 0.5, fontWeight: 500 }}>
            Password <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter password"
            size="small"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

          {/* Error */}
          {error && (
            <Typography color="error" fontSize={13} mt={1}>
              {error}
            </Typography>
          )}

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
            <RouterLink
              to="/forgot-password"
              style={{
                textDecoration: "none",
                fontSize: 14,
                color: "#2563eb",
                fontWeight: 500,
              }}
            >
              Forgot Password?
            </RouterLink>
          </Box>

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              mt: 3,
              py: 1.2,
              backgroundColor: "#dbe4ff",
              color: "#1e40af",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#c7d2fe" },
            }}
            onClick={handleLogin}
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
