import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Grid,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const AddUserModal = ({ open, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("User Data:", formData);
    onClose(); // close modal after save
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{ sx: { borderRadius: 3 } }}
    >
      <DialogContent sx={{ p: 4 }}>
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography fontWeight={600} fontSize={18}>
            Add User
          </Typography>

          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* FORM */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={500}>
              First Name <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              size="small"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight={500}>
              Last Name <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              size="small"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography fontWeight={500}>
              Email <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              size="small"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography fontWeight={500}>
              Password <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              size="small"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography fontWeight={500}>
              Confirm Password <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              fullWidth
              size="small"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        {/* ACTION BUTTON */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              px: 4,
              backgroundColor: "#2563eb",
              borderRadius: 2,
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            Save Changes
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserModal;