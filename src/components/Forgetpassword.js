
// import React from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   TextField,
//   Button,
//   Typography,
// } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";

// const ForgotPassword = () => {
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
//       <Card sx={{ width: 420, borderRadius: 3, boxShadow: 3 }}>
//         <CardContent sx={{ p: 4 }}>
          
//           {/* Logo */}
//           <Box sx={{ textAlign: "center", mb: 2 }}>
//             <img
//               src="https://images.vexels.com/media/users/3/212847/isolated/preview/341051af4de838b81202c499d4c668b0-only-play-pickleball-paddle-round-badge.png?w=360"
//               alt="logo"
//               width={70}
//             />
//           </Box>

//           <Typography align="center" sx={{ fontSize: 18, fontWeight: 600 }}>
//             Forgot Password
//           </Typography>

//           <Typography
//             align="center"
//             sx={{ fontSize: 14, color: "gray", mb: 3 }}
//           >
//             Enter your registered email to receive a reset link
//           </Typography>

//           {/* Email */}
//           <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
//             Email <span style={{ color: "red" }}>*</span>
//           </Typography>
//           <TextField fullWidth placeholder="Enter your Email" size="small" />

//           {/* Button */}
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
//             Send Reset Link
//           </Button>

//           {/* Back to Login */}
//           <Typography align="center" sx={{ mt: 3, fontSize: 14 }}>
//             Remembered your password?{" "}
//             <RouterLink
//               to="/"
//               style={{
//                 textDecoration: "none",
//                 color: "#2563eb",
//                 fontWeight: 500,
//               }}
//             >
//               Sign In
//             </RouterLink>
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default ForgotPassword;

import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../redux/AuthThunks";
import { clearAuthMessages } from "../redux/AuthSlice";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { loading, error, successMessage } = useSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) return;
    dispatch(forgotPassword({ email }));
  };

  // Clear messages when leaving page
  useEffect(() => {
    return () => {
      dispatch(clearAuthMessages());
    };
  }, [dispatch]);

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
              width={70}
            />
          </Box>

          <Typography align="center" sx={{ fontSize: 18, fontWeight: 600 }}>
            Forgot Password
          </Typography>

          <Typography
            align="center"
            sx={{ fontSize: 14, color: "gray", mb: 3 }}
          >
            Enter your registered email to receive a reset link
          </Typography>

          {/* Success / Error */}
          {successMessage && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {successMessage}
            </Alert>
          )}

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {/* Email */}
          <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
            Email <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Button */}
          <Button
            fullWidth
            variant="contained"
            disabled={loading}
            onClick={handleSubmit}
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
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>

          {/* Back to login */}
          <Typography align="center" sx={{ mt: 3, fontSize: 14 }}>
            Remembered your password?{" "}
            <RouterLink
              to="/login"
              style={{
                textDecoration: "none",
                color: "#2563eb",
                fontWeight: 500,
              }}
            >
              Sign In
            </RouterLink>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ForgotPassword;
