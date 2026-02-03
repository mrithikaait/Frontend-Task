// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   IconButton,
//   Grid,
//   InputAdornment,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

// const AddUserModal = ({ open, onClose }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     console.log("User Data:", formData);
//     onClose(); // close modal after save
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       maxWidth="sm"
//       fullWidth
//       PaperProps={{ sx: { borderRadius: 3 } }}
//     >
//       <DialogContent sx={{ p: 4 }}>
//         {/* HEADER */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             mb: 3,
//           }}
//         >
//           <Typography fontWeight={600} fontSize={18}>
//             Add User
//           </Typography>

//           <IconButton onClick={onClose}>
//             <CloseIcon />
//           </IconButton>
//         </Box>

//         {/* FORM */}
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <Typography fontWeight={500}>
//               First Name <span style={{ color: "red" }}>*</span>
//             </Typography>
//             <TextField
//               fullWidth
//               size="small"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               placeholder="Enter First Name"
//             />
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <Typography fontWeight={500}>
//               Last Name <span style={{ color: "red" }}>*</span>
//             </Typography>
//             <TextField
//               fullWidth
//               size="small"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               placeholder="Enter Last Name"
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <Typography fontWeight={500}>
//               Email <span style={{ color: "red" }}>*</span>
//             </Typography>
//             <TextField
//               fullWidth
//               size="small"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter Email Address"
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <Typography fontWeight={500}>
//               Password <span style={{ color: "red" }}>*</span>
//             </Typography>
//             <TextField
//               fullWidth
//               size="small"
//               name="password"
//               type={showPassword ? "text" : "password"}
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter password"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <Typography fontWeight={500}>
//               Confirm Password <span style={{ color: "red" }}>*</span>
//             </Typography>
//             <TextField
//               fullWidth
//               size="small"
//               name="confirmPassword"
//               type={showPassword ? "text" : "password"}
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="Confirm password"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>
//         </Grid>

//         {/* ACTION BUTTON */}
//         <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
//           <Button
//             variant="contained"
//             onClick={handleSubmit}
//             sx={{
//               px: 4,
//               backgroundColor: "#2563eb",
//               borderRadius: 2,
//               fontWeight: 600,
//               textTransform: "none",
//             }}
//           >
//             Save Changes
//           </Button>
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default AddUserModal;



// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   IconButton,
//   Grid,
//   InputAdornment,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { addUser } from "../api/UserApi";

// const AddUserModal = ({ open, onClose, onUserAdded }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const payload = {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         password: formData.password,
//         status: "Active",
//       };

//       const res = await addUser(payload);

//       // 🔥 SEND NEW USER TO LIST
//       onUserAdded(res.data);

//       onClose();
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch (err) {
//       alert("Failed to add user");
//     }
//   };

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
//       <DialogContent sx={{ p: 4 }}>
//         <Box display="flex" justifyContent="space-between" mb={3}>
//           <Typography fontWeight={600}>Add User</Typography>
//           <IconButton onClick={onClose}><CloseIcon /></IconButton>
//         </Box>

//         <Grid container spacing={2}>
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               size="small"
//               name="firstName"
//               label="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               size="small"
//               name="lastName"
//               label="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               size="small"
//               name="email"
//               label="Email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               size="small"
//               name="password"
//               type={showPassword ? "text" : "password"}
//               label="Password"
//               value={formData.password}
//               onChange={handleChange}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setShowPassword(!showPassword)}>
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               size="small"
//               name="confirmPassword"
//               type="password"
//               label="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//             />
//           </Grid>
//         </Grid>

//         <Box mt={4} textAlign="right">
//           <Button variant="contained" onClick={handleSubmit}>
//             Save Changes
//           </Button>
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default AddUserModal;

// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   IconButton,
//   Grid,
//   InputAdornment,
//   MenuItem,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { addUser } from "../api/UserApi";

// const roles = ["Player", "Admin", "Coach"]; // example roles
// const statuses = ["Active", "Inactive"];

// const AddUserModal = ({ open, onClose, onUserAdded }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "Player",
//     status: "Active",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     // Basic validation
//     if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
//       alert("Please fill all required fields");
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     setLoading(true);

//     try {
//       const payload = {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         password: formData.password,
//         role: formData.role,
//         status: formData.status,
//       };

//       const res = await addUser(payload);

//       // 🔥 Update parent UI instantly
//       onUserAdded(res.data);

//       // Reset form & close modal
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         role: "Player",
//         status: "Active",
//       });
//       onClose();
//     } catch (err) {
//       console.error(err);
//       alert("Failed to add user");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
//       <DialogContent sx={{ p: 4 }}>
//         <Box display="flex" justifyContent="space-between" mb={3}>
//           <Typography fontWeight={600}>Add User</Typography>
//           <IconButton onClick={onClose}>
//             <CloseIcon />
//           </IconButton>
//         </Box>

//         <Grid container spacing={2}>
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               size="small"
//               name="firstName"
//               label="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               size="small"
//               name="lastName"
//               label="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               size="small"
//               name="email"
//               label="Email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               size="small"
//               name="password"
//               type={showPassword ? "text" : "password"}
//               label="Password"
//               value={formData.password}
//               onChange={handleChange}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setShowPassword(!showPassword)}>
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>

//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               size="small"
//               name="confirmPassword"
//               type="password"
//               label="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={6}>
//             <TextField
//               select
//               fullWidth
//               size="small"
//               name="role"
//               label="Role"
//               value={formData.role}
//               onChange={handleChange}
//             >
//               {roles.map((role) => (
//                 <MenuItem key={role} value={role}>
//                   {role}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>

//           <Grid item xs={6}>
//             <TextField
//               select
//               fullWidth
//               size="small"
//               name="status"
//               label="Status"
//               value={formData.status}
//               onChange={handleChange}
//             >
//               {statuses.map((status) => (
//                 <MenuItem key={status} value={status}>
//                   {status}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//         </Grid>

//         <Box mt={4} textAlign="right">
//           <Button
//             variant="contained"
//             onClick={handleSubmit}
//             disabled={loading}
//           >
//             {loading ? "Saving..." : "Save Changes"}
//           </Button>
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default AddUserModal;






// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   IconButton,
//   InputAdornment,
//   MenuItem,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { addUser } from "../redux/UserThunks";

// const rolesList = ["Player", "Admin", "Coach"];
// const statusesList = ["Active", "Inactive"];

// const AddUserModal = ({ open, onClose, onUserAdded }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     role: "Player",
//     status: "Active",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     const { firstName, lastName, email, phone, password, confirmPassword, role, status } = formData;

//     // Validation
//     if (!firstName || !lastName || !email || !password || !confirmPassword) {
//       alert("Please fill all required fields");
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(email)) {
//       alert("Enter a valid email address");
//       return;
//     }

//     if (password.length < 6) {
//       alert("Password must be at least 6 characters");
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     if (phone && !/^\d{10}$/.test(phone)) {
//       alert("Enter a valid 10-digit phone number");
//       return;
//     }

//     setLoading(true);

//     try {
//       const payload = { firstName, lastName, email, phone, password, role, status };
//       const res = await addUser(payload);
//       onUserAdded(res.data);
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         password: "",
//         confirmPassword: "",
//         role: "Player",
//         status: "Active",
//       });
//       onClose();
//     } catch (err) {
//       console.error(err);
//       alert(err?.response?.data?.message || "Failed to add user");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Uniform height for all input fields and dropdowns
//   const uniformInputStyle = {
//     "& .MuiInputBase-root": {
//       height: 45,
//       "& input": {
//         height: "100%",
//         padding: "0 14px",
//         boxSizing: "border-box",
//       },
//     },
//     "& .MuiInputAdornment-root": {
//       height: "100%",
//       "& button": {
//         padding: 0,
//         height: "100%",
//       },
//     },
//   };

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
//       <DialogContent sx={{ p: 4 }}>
//         {/* Header */}
//         <Box display="flex" justifyContent="space-between" mb={3}>
//           <Typography fontWeight={600}>Add User</Typography>
//           <IconButton onClick={onClose}>
//             <CloseIcon />
//           </IconButton>
//         </Box>

//         {/* First Name & Last Name */}
//         <Box display="flex" gap={2} mb={2}>
//           <TextField
//             fullWidth
//             size="small"
//             name="firstName"
//             label="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//             sx={uniformInputStyle}
//           />
//           <TextField
//             fullWidth
//             size="small"
//             name="lastName"
//             label="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//             sx={uniformInputStyle}
//           />
//         </Box>

//         {/* Email */}
//         <Box mb={2}>
//           <TextField
//             fullWidth
//             size="small"
//             name="email"
//             label="Email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             sx={uniformInputStyle}
//           />
//         </Box>

//         {/* Phone */}
//         <Box mb={2}>
//           <TextField
//             fullWidth
//             size="small"
//             name="phone"
//             label="Phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="10-digit number"
//             sx={uniformInputStyle}
//           />
//         </Box>

//         {/* Password */}
//         <Box mb={2}>
//           <TextField
//             fullWidth
//             size="small"
//             name="password"
//             type={showPassword ? "text" : "password"}
//             label="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             sx={uniformInputStyle}
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
//         </Box>

//         {/* Confirm Password */}
//         <Box mb={2}>
//           <TextField
//             fullWidth
//             size="small"
//             name="confirmPassword"
//             type={showConfirmPassword ? "text" : "password"}
//             label="Confirm Password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//             sx={uniformInputStyle}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
//                     {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Box>

//         {/* Role */}
//         <Box mb={2}>
//           <TextField
//             select
//             fullWidth
//             size="small"
//             name="role"
//             label="Role"
//             value={formData.role}
//             onChange={handleChange}
//             sx={uniformInputStyle}
//           >
//             {rolesList.map((role) => (
//               <MenuItem key={role} value={role}>
//                 {role}
//               </MenuItem>
//             ))}
//           </TextField>
//         </Box>

//         {/* Status */}
//         <Box mb={2}>
//           <TextField
//             select
//             fullWidth
//             size="small"
//             name="status"
//             label="Status"
//             value={formData.status}
//             onChange={handleChange}
//             sx={uniformInputStyle}
//           >
//             {statusesList.map((status) => (
//               <MenuItem key={status} value={status}>
//                 {status}
//               </MenuItem>
//             ))}
//           </TextField>
//         </Box>

//         {/* Save Changes Button */}
//         <Box mt={4} textAlign="right">
//           <Button
//             variant="contained"
//             onClick={handleSubmit}
//             disabled={loading}
//             sx={{ minWidth: 120 }}
//           >
//             {loading ? "Saving..." : "Save Changes"}
//           </Button>
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default AddUserModal;



import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/UserThunks";

const rolesList = ["Player", "Admin", "Coach"];
const statusesList = ["Active", "Inactive"];

const AddUserModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.users);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "Player",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { firstName, lastName, email, phone, password, confirmPassword, role, status } = formData;

    // Basic validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill all required fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Enter a valid email address");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (phone && !/^\d{10}$/.test(phone)) {
      alert("Enter a valid 10-digit phone number");
      return;
    }

    try {
      const payload = { firstName, lastName, email, phone, password, role, status };
      const res = await dispatch(addUser(payload));

      if (!res.error) {
        alert("User added successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          role: "Player",
          status: "Active",
        });
        onClose();
      } else {
        alert(res.error?.message || "Failed to add user");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  const uniformInputStyle = {
    "& .MuiInputBase-root": {
      height: 45,
      "& input": { height: "100%", padding: "0 14px", boxSizing: "border-box" },
    },
    "& .MuiInputAdornment-root": {
      height: "100%",
      "& button": { padding: 0, height: "100%" },
    },
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent sx={{ p: 4 }}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography fontWeight={600}>Add User</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Name Fields */}
        <Box display="flex" gap={2} mb={2}>
          <TextField
            fullWidth
            size="small"
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            sx={uniformInputStyle}
          />
          <TextField
            fullWidth
            size="small"
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            sx={uniformInputStyle}
          />
        </Box>

        {/* Email */}
        <Box mb={2}>
          <TextField
            fullWidth
            size="small"
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={uniformInputStyle}
          />
        </Box>

        {/* Phone */}
        <Box mb={2}>
          <TextField
            fullWidth
            size="small"
            name="phone"
            label="Phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit number"
            sx={uniformInputStyle}
          />
        </Box>

        {/* Password */}
        <Box mb={2}>
          <TextField
            fullWidth
            size="small"
            name="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            value={formData.password}
            onChange={handleChange}
            required
            sx={uniformInputStyle}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Confirm Password */}
        <Box mb={2}>
          <TextField
            fullWidth
            size="small"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            sx={uniformInputStyle}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Role */}
        <Box mb={2}>
          <TextField
            select
            fullWidth
            size="small"
            name="role"
            label="Role"
            value={formData.role}
            onChange={handleChange}
            sx={uniformInputStyle}
          >
            {rolesList.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Status */}
        <Box mb={2}>
          <TextField
            select
            fullWidth
            size="small"
            name="status"
            label="Status"
            value={formData.status}
            onChange={handleChange}
            sx={uniformInputStyle}
          >
            {statusesList.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Save Button */}
        <Box mt={4} textAlign="right">
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={loading}
            sx={{ minWidth: 120 }}
          >
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserModal;
