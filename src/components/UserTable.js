// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Avatar,
//   Chip,
//   IconButton,
//   Box,
//   Typography,
//   FormControl,
//   Select,
//   MenuItem,
//   Dialog,
//   DialogContent,
//   Button,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CancelIcon from "@mui/icons-material/Cancel";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// /* 🔹 INITIAL USER DATA */
// const initialUsers = [
//   { id: 1, name: "Pickleball Coach", email: "pickleballclub.ad+5@gmail.com", phone: "8778765665", date: "1/27/2026", role: "Coach", verified: true, status: "Active" },
//   { id: 2, name: "Coach Mattner", email: "balanait2001+11@gmail.com", phone: "9033232332", date: "1/27/2026", role: "Coach", verified: true, status: "Inactive" },
//   { id: 3, name: "James Test", email: "balanait2001+10@gmail.com", phone: "9033232332", date: "1/27/2026", role: "Player", verified: true, status: "Active" },
//   { id: 4, name: "James player test", email: "jamesplayer@test.com", phone: "8778675645", date: "1/27/2026", role: "Player", verified: false, status: "Active" },
//   { id: 5, name: "Balan R", email: "cookiefamily.ait@gmail.com", phone: "9033232332", date: "1/27/2026", role: "Admin", verified: true, status: "Active" },
//   { id: 6, name: "Coach test", email: "cookiefamily.ait+24@gmail.com", phone: "9033232332", date: "1/27/2026", role: "Player", verified: true, status: "Active" },
//   { id: 7, name: "John john", email: "sujisuji7@gmail.com", phone: "9033232332", date: "1/27/2026", role: "Player", verified: true, status: "Active" },
//   { id: 8, name: "Test test", email: "sujini1656@gmail.com", phone: "N/A", date: "1/27/2026", role: "Player", verified: true, status: "Active" },
//   { id: 9, name: "User user", email: "user9@gmail.com", phone: "N/A", date: "1/27/2026", role: "Player", verified: false, status: "Active" },
// ];

// const UserTable = () => {
//   const [users, setUsers] = useState(initialUsers);
//   const [page, setPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(8);

//   // 🔴 Delete dialog state
//   const [openDelete, setOpenDelete] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);

//   const totalPages = Math.ceil(users.length / rowsPerPage);
//   const startIndex = (page - 1) * rowsPerPage;
//   const endIndex = Math.min(startIndex + rowsPerPage, users.length);
//   const paginatedUsers = users.slice(startIndex, endIndex);

//   const handleRowsChange = (e) => {
//     setRowsPerPage(e.target.value);
//     setPage(1);
//   };

//   // 🔹 Open delete popup
//   const handleDeleteClick = (user) => {
//     setSelectedUser(user);
//     setOpenDelete(true);
//   };

//   // 🔹 Confirm delete
//   const handleConfirmDelete = () => {
//     setUsers(users.filter((u) => u.id !== selectedUser.id));
//     setOpenDelete(false);
//   };

//   return (
//     <>
//       <TableContainer component={Paper} elevation={0}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>S.No</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Phone</TableCell>
//               <TableCell>Date</TableCell>
//               <TableCell>Role</TableCell>
//               <TableCell>Verified</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {paginatedUsers.map((user, index) => (
//               <TableRow key={user.id}>
//                 <TableCell>{startIndex + index + 1}</TableCell>

//                 <TableCell>
//                   <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
//                     <Avatar sx={{ width: 30, height: 30 }} />
//                     <Typography fontSize={14}>{user.name}</Typography>
//                   </Box>
//                 </TableCell>

//                 <TableCell>
//                   <Typography fontSize={13} color="text.secondary">
//                     {user.email}
//                   </Typography>
//                 </TableCell>

//                 <TableCell>{user.phone}</TableCell>
//                 <TableCell>{user.date}</TableCell>

//                 <TableCell>
//                   <Chip label={user.role} size="small" sx={{ bgcolor: "#1d4ed8", color: "#fff" }} />
//                 </TableCell>

//                 <TableCell>
//                   {user.verified ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" />}
//                 </TableCell>

//                 <TableCell>
//                   <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                     <Box
//                       sx={{
//                         width: 10,
//                         height: 10,
//                         borderRadius: "50%",
//                         bgcolor: user.status === "Active" ? "green" : "red",
//                       }}
//                     />
//                     <Typography fontSize={13}>{user.status}</Typography>
//                   </Box>
//                 </TableCell>

//                 {/* ACTION */}
//                 <TableCell>
//                   <Box sx={{ display: "flex", gap: 1 }}>
//                     <IconButton size="small" sx={{ bgcolor: "#2563eb", color: "#fff" }}>
//                       <EditIcon fontSize="small" />
//                     </IconButton>

//                     <IconButton
//                       size="small"
//                       sx={{ bgcolor: "#dc2626", color: "#fff" }}
//                       onClick={() => handleDeleteClick(user)}
//                     >
//                       <DeleteIcon fontSize="small" />
//                     </IconButton>
//                   </Box>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* PAGINATION + ENTRIES */}
//       <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
//         <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//           <Typography fontSize={14}>Entries per page:</Typography>
//           <FormControl size="small">
//             <Select value={rowsPerPage} onChange={handleRowsChange}>
//               <MenuItem value={5}>5</MenuItem>
//               <MenuItem value={8}>8</MenuItem>
//               <MenuItem value={10}>10</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>

//         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//           <IconButton disabled={page === 1} onClick={() => setPage(page - 1)}>
//             <ChevronLeftIcon />
//           </IconButton>

//           <Typography fontSize={14}>
//             Page {page} of {totalPages} | {startIndex + 1}–{endIndex} of {users.length}
//           </Typography>

//           <IconButton disabled={page === totalPages} onClick={() => setPage(page + 1)}>
//             <ChevronRightIcon />
//           </IconButton>
//         </Box>
//       </Box>

//       {/* DELETE CONFIRMATION DIALOG */}
//       <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
//         <DialogContent sx={{ textAlign: "center", p: 4 }}>
//           <Typography fontSize={18} fontWeight={600} mb={1}>
//             Delete User
//           </Typography>
//           <Typography fontSize={14} mb={3}>
//             Are you sure you want to delete this user?
//           </Typography>

//           <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
//             <Button variant="outlined" onClick={() => setOpenDelete(false)}>
//               Cancel
//             </Button>
//             <Button variant="contained" color="error" onClick={handleConfirmDelete}>
//               Confirm
//             </Button>
//           </Box>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default UserTable;



// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Avatar,
//   Chip,
//   IconButton,
//   Box,
//   Typography,
//   FormControl,
//   Select,
//   MenuItem,
//   Dialog,
//   DialogContent,
//   Button,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CancelIcon from "@mui/icons-material/Cancel";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// import AddUserModal from "./AddUserModal";
// import { getUsers } from "../api/UserApi";

// const UserTable = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [openAdd, setOpenAdd] = useState(false);

//   const [page, setPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(8);

//   // DELETE
//   const [openDelete, setOpenDelete] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     const res = await getUsers();

//     const formatted = res.data.map((user) => ({
//       id: user._id,
//       name: `${user.firstName} ${user.lastName}`,
//       email: user.email,
//       phone: user.phone || "N/A",
//       date: new Date(user.createdAt).toLocaleDateString(),
//       role: user.role || "Player",
//       verified: user.verified ?? false,
//       status: user.status || "Active",
//     }));

//     setUsers(formatted);
//     setLoading(false);
//   };

//   // 🔥 ADD USER (LIVE UPDATE)
//   const handleUserAdded = (user) => {
//     const formatted = {
//       id: user._id,
//       name: `${user.firstName} ${user.lastName}`,
//       email: user.email,
//       phone: "N/A",
//       date: new Date().toLocaleDateString(),
//       role: "Player",
//       verified: false,
//       status: "Active",
//     };

//     setUsers((prev) => [formatted, ...prev]);
//   };

//   const totalPages = Math.ceil(users.length / rowsPerPage);
//   const startIndex = (page - 1) * rowsPerPage;
//   const paginatedUsers = users.slice(startIndex, startIndex + rowsPerPage);

//   const handleDeleteClick = (user) => {
//     setSelectedUser(user);
//     setOpenDelete(true);
//   };

//   const handleConfirmDelete = () => {
//     setUsers(users.filter((u) => u.id !== selectedUser.id));
//     setOpenDelete(false);
//   };

//   if (loading) {
//     return <Typography align="center">Loading users...</Typography>;
//   }

//   return (
//     <>
//       {/* ADD USER BUTTON */}
//       <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
//         <Button variant="contained" onClick={() => setOpenAdd(true)}>
//           + Add User
//         </Button>
//       </Box>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>S.No</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Role</TableCell>
//               <TableCell>Verified</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {paginatedUsers.map((user, index) => (
//               <TableRow key={user.id}>
//                 <TableCell>{startIndex + index + 1}</TableCell>

//                 <TableCell>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <Avatar />
//                     {user.name}
//                   </Box>
//                 </TableCell>

//                 <TableCell>{user.email}</TableCell>

//                 <TableCell>
//                   <Chip label={user.role} size="small" />
//                 </TableCell>

//                 <TableCell>
//                   {user.verified ? (
//                     <CheckCircleIcon color="success" />
//                   ) : (
//                     <CancelIcon color="error" />
//                   )}
//                 </TableCell>

//                 <TableCell>{user.status}</TableCell>

//                 <TableCell>
//                   <IconButton sx={{ bgcolor: "#2563eb", color: "#fff" }}>
//                     <EditIcon fontSize="small" />
//                   </IconButton>
//                   <IconButton
//                     sx={{ bgcolor: "#dc2626", color: "#fff", ml: 1 }}
//                     onClick={() => handleDeleteClick(user)}
//                   >
//                     <DeleteIcon fontSize="small" />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* ADD USER MODAL */}
//       <AddUserModal
//         open={openAdd}
//         onClose={() => setOpenAdd(false)}
//         onUserAdded={handleUserAdded}
//       />

//       {/* DELETE CONFIRM */}
//       <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
//         <DialogContent>
//           <Typography mb={2}>Delete this user?</Typography>
//           <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
//           <Button color="error" onClick={handleConfirmDelete}>
//             Delete
//           </Button>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default UserTable;



// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Avatar,
//   Chip,
//   IconButton,
//   Box,
//   Typography,
//   Dialog,
//   DialogContent,
//   Button,
//   CircularProgress,
//   TextField,
//   Select,
//   MenuItem,
//   FormControlLabel,
//   Checkbox,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CancelIcon from "@mui/icons-material/Cancel";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// import { getUsers, deleteUser, updateUser } from "../api/UserApi";

// const UserTable = ({ roleFilter = "All", newUser }) => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const rowsPerPage = 8;

//   // DELETE
//   const [openDelete, setOpenDelete] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);

//   // EDIT
//   const [openEdit, setOpenEdit] = useState(false);
//   const [editForm, setEditForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     role: "",
//     status: "",
//     date: "",
//     verified: false,
//   });

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     if (newUser) handleUserAdded(newUser);
//   }, [newUser]);

//   const fetchUsers = async () => {
//     setLoading(true);
//     try {
//       const res = await getUsers();
//       const formatted = res.data.map((user) => ({
//         id: user._id,
//         name: `${user.firstName} ${user.lastName}`,
//         email: user.email,
//         phone: user.phone || "",
//         date: user.createdAt ? new Date(user.createdAt).toISOString().split("T")[0] : "",
//         role: user.role || "Player",
//         verified: user.verified ?? false,
//         status: user.status || "Active",
//       }));
//       setUsers(formatted);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to fetch users");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUserAdded = (user) => {
//     const formatted = {
//       id: user._id,
//       name: `${user.firstName} ${user.lastName}`,
//       email: user.email,
//       phone: user.phone || "",
//       date: user.createdAt ? new Date(user.createdAt).toISOString().split("T")[0] : "",
//       role: user.role || "Player",
//       verified: user.verified ?? false,
//       status: user.status || "Active",
//     };
//     setUsers((prev) => [formatted, ...prev]);
//     setPage(1);
//   };

//   // DELETE HANDLERS
//   const handleDeleteClick = (user) => {
//     setSelectedUser(user);
//     setOpenDelete(true);
//   };

//   const handleConfirmDelete = async () => {
//     try {
//       await deleteUser(selectedUser.id);
//       fetchUsers();
//       setOpenDelete(false);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete user");
//     }
//   };

//   // EDIT HANDLERS
//   const handleEditClick = (user) => {
//     setSelectedUser(user);
//     setEditForm({
//       name: user.name,
//       email: user.email,
//       phone: user.phone,
//       role: user.role,
//       status: user.status,
//       date: user.date,
//       verified: user.verified,
//     });
//     setOpenEdit(true);
//   };

//   const handleEditSave = async () => {
//     try {
//       await updateUser(selectedUser.id, editForm);
//       fetchUsers();
//       setOpenEdit(false);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update user");
//     }
//   };

//   // FILTER + PAGINATION
//   const filteredUsers =
//     roleFilter === "All" ? users : users.filter((u) => u.role === roleFilter);
//   const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
//   const startIndex = (page - 1) * rowsPerPage;
//   const paginatedUsers = filteredUsers.slice(
//     startIndex,
//     startIndex + rowsPerPage
//   );

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" mt={4}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>S.No</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Phone</TableCell>
//               <TableCell>Date</TableCell>
//               <TableCell>Role</TableCell>
//               <TableCell>Verified</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {paginatedUsers.map((user, index) => (
//               <TableRow key={user.id}>
//                 <TableCell>{startIndex + index + 1}</TableCell>
//                 <TableCell>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <Avatar>
//                       {user.name
//                         .split(" ")
//                         .map((n) => n[0])
//                         .join("")}
//                     </Avatar>
//                     {user.name}
//                   </Box>
//                 </TableCell>
//                 <TableCell>{user.email}</TableCell>
//                 <TableCell>{user.phone}</TableCell>
//                 <TableCell>{user.date}</TableCell>
//                 <TableCell>
//                   <Chip label={user.role} size="small" />
//                 </TableCell>
//                 <TableCell>
//                   {user.verified ? (
//                     <CheckCircleIcon color="success" />
//                   ) : (
//                     <CancelIcon color="error" />
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   <Chip
//                     label={user.status}
//                     size="small"
//                     color={user.status === "Active" ? "success" : "default"}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <IconButton
//                     sx={{ bgcolor: "#2563eb", color: "#fff" }}
//                     onClick={() => handleEditClick(user)}
//                   >
//                     <EditIcon fontSize="small" />
//                   </IconButton>

//                   <IconButton
//                     sx={{ bgcolor: "#dc2626", color: "#fff", ml: 1 }}
//                     onClick={() => handleDeleteClick(user)}
//                   >
//                     <DeleteIcon fontSize="small" />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}

//             {paginatedUsers.length === 0 && (
//               <TableRow>
//                 <TableCell colSpan={9} align="center">
//                   No users found.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* PAGINATION */}
//       {totalPages > 1 && (
//         <Box display="flex" justifyContent="flex-end" alignItems="center" mt={2}>
//           <IconButton disabled={page === 1} onClick={() => setPage(page - 1)}>
//             <ChevronLeftIcon />
//           </IconButton>
//           <Typography mx={1}>
//             {page} / {totalPages}
//           </Typography>
//           <IconButton
//             disabled={page === totalPages}
//             onClick={() => setPage(page + 1)}
//           >
//             <ChevronRightIcon />
//           </IconButton>
//         </Box>
//       )}

//       {/* DELETE CONFIRM */}
//       <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
//         <DialogContent>
//           <Typography mb={2}>Delete this user?</Typography>
//           <Box display="flex" justifyContent="flex-end" gap={1}>
//             <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
//             <Button color="error" onClick={handleConfirmDelete}>
//               Delete
//             </Button>
//           </Box>
//         </DialogContent>
//       </Dialog>

//       {/* EDIT USER MODAL */}
//       <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
//         <DialogContent>
//           <Typography mb={2}>Edit User</Typography>

//           <TextField
//             fullWidth
//             margin="normal"
//             label="Name"
//             value={editForm.name}
//             onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Email"
//             value={editForm.email}
//             onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Phone"
//             value={editForm.phone}
//             onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
//           />

//           <Select
//             fullWidth
//             margin="normal"
//             value={editForm.role}
//             onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
//           >
//             <MenuItem value="Admin">Admin</MenuItem>
//             <MenuItem value="Coach">Coach</MenuItem>
//             <MenuItem value="Player">Player</MenuItem>
//           </Select>

//           <Select
//             fullWidth
//             margin="normal"
//             value={editForm.status}
//             onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
//           >
//             <MenuItem value="Active">Active</MenuItem>
//             <MenuItem value="Inactive">Inactive</MenuItem>
//           </Select>

//           <TextField
//             fullWidth
//             margin="normal"
//             label="Date"
//             type="date"
//             value={editForm.date}
//             onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
//             InputLabelProps={{ shrink: true }}
//           />

//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={editForm.verified}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, verified: e.target.checked })
//                 }
//               />
//             }
//             label="Verified"
//           />

//           <Box mt={2} display="flex" justifyContent="flex-end" gap={1}>
//             <Button variant="contained" onClick={handleEditSave}>
//               Save
//             </Button>
//             <Button variant="outlined" onClick={() => setOpenEdit(false)}>
//               Cancel
//             </Button>
//           </Box>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default UserTable;


// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Avatar,
//   Chip,
//   IconButton,
//   Typography,
//   Dialog,
//   DialogContent,
//   Button,
//   CircularProgress,
//   TextField,
//   Select,
//   MenuItem,
//   FormControlLabel,
//   Checkbox,
// } from "@mui/material";

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CancelIcon from "@mui/icons-material/Cancel";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// import { getUsers, deleteUser, updateUser } from "../api/UserApi";

// const UserTable = ({ roleFilter = "All", newUser }) => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   // DELETE
//   const [openDelete, setOpenDelete] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);

//   // EDIT
//   const [openEdit, setOpenEdit] = useState(false);
//   const [editForm, setEditForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     role: "",
//     status: "",
//     date: "",
//     verified: false,
//   });

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     if (newUser) handleUserAdded(newUser);
//   }, [newUser]);

//   const fetchUsers = async () => {
//     setLoading(true);
//     try {
//       const res = await getUsers();
//       const formatted = res.data.map((user) => ({
//         id: user._id,
//         name: `${user.firstName} ${user.lastName}`,
//         email: user.email,
//         phone: user.phone || "N/A",
//         date: user.createdAt
//           ? new Date(user.createdAt).toISOString().split("T")[0]
//           : "N/A",
//         role: user.role || "Player",
//         verified: user.verified ?? false,
//         status: user.status || "Active",
//       }));
//       setUsers(formatted);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to fetch users");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUserAdded = (user) => {
//     const formatted = {
//       id: user._id,
//       name: `${user.firstName} ${user.lastName}`,
//       email: user.email,
//       phone: user.phone || "N/A",
//       date: user.createdAt
//         ? new Date(user.createdAt).toISOString().split("T")[0]
//         : "N/A",
//       role: user.role || "Player",
//       verified: user.verified ?? false,
//       status: user.status || "Active",
//     };
//     setUsers((prev) => [formatted, ...prev]);
//     setPage(1);
//   };

//   // DELETE
//   const handleDeleteClick = (user) => {
//     setSelectedUser(user);
//     setOpenDelete(true);
//   };

//   const handleConfirmDelete = async () => {
//     try {
//       await deleteUser(selectedUser.id);
//       fetchUsers();
//       setOpenDelete(false);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete user");
//     }
//   };

//   // EDIT
//   const handleEditClick = (user) => {
//     setSelectedUser(user);
//     setEditForm({
//       name: user.name,
//       email: user.email,
//       phone: user.phone,
//       role: user.role,
//       status: user.status,
//       date: user.date,
//       verified: user.verified,
//     });
//     setOpenEdit(true);
//   };

//   const handleEditSave = async () => {
//     try {
//       await updateUser(selectedUser.id, editForm);
//       fetchUsers();
//       setOpenEdit(false);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update user");
//     }
//   };

//   // FILTER + PAGINATION
//   const filteredUsers =
//     roleFilter === "All" ? users : users.filter((u) => u.role === roleFilter);
//   const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
//   const startIndex = (page - 1) * rowsPerPage;
//   const paginatedUsers = filteredUsers.slice(
//     startIndex,
//     startIndex + rowsPerPage
//   );

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" mt={4}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>S.No</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Phone</TableCell>
//               <TableCell>Date</TableCell>
//               <TableCell>Role</TableCell>
//               <TableCell>Verified</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {paginatedUsers.map((user, index) => (
//               <TableRow key={user.id}>
//                 <TableCell>{startIndex + index + 1}</TableCell>
//                 <TableCell>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <Avatar>
//                       {user.name
//                         .split(" ")
//                         .map((n) => n[0])
//                         .join("")}
//                     </Avatar>
//                     {user.name}
//                   </Box>
//                 </TableCell>
//                 <TableCell>{user.email}</TableCell>
//                 <TableCell>{user.phone}</TableCell>
//                 <TableCell>{user.date}</TableCell>
//                 <TableCell>
//                   <Chip label={user.role} size="small" />
//                 </TableCell>
//                 <TableCell>
//                   {user.verified ? (
//                     <CheckCircleIcon color="success" />
//                   ) : (
//                     <CancelIcon color="error" />
//                   )}
//                 </TableCell>
//                 <TableCell>
//                   <Chip
//                     label={user.status}
//                     size="small"
//                     color={user.status === "Active" ? "success" : "default"}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <IconButton
//                     sx={{ bgcolor: "#2563eb", color: "#fff" }}
//                     onClick={() => handleEditClick(user)}
//                   >
//                     <EditIcon fontSize="small" />
//                   </IconButton>

//                   <IconButton
//                     sx={{ bgcolor: "#dc2626", color: "#fff", ml: 1 }}
//                     onClick={() => handleDeleteClick(user)}
//                   >
//                     <DeleteIcon fontSize="small" />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}

//             {paginatedUsers.length === 0 && (
//               <TableRow>
//                 <TableCell colSpan={9} align="center">
//                   No users found.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Footer: entries per page + pagination info */}
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//         mt={2}
//         px={1}
//       >
//         {/* Entries per page */}
//         <Box display="flex" alignItems="center" gap={1}>
//           <Typography>Entries per page:</Typography>
//           <Select
//             size="small"
//             value={rowsPerPage}
//             onChange={(e) => {
//               setRowsPerPage(Number(e.target.value));
//               setPage(1);
//             }}
//           >
//             {[5, 10, 25, 50].map((n) => (
//               <MenuItem key={n} value={n}>
//                 {n}
//               </MenuItem>
//             ))}
//           </Select>
//         </Box>

//         {/* Pagination info + buttons */}
//         <Box display="flex" alignItems="center" gap={1}>
//           <IconButton
//             size="small"
//             disabled={page === 1}
//             onClick={() => setPage(page - 1)}
//           >
//             <ChevronLeftIcon />
//           </IconButton>

//           <Typography>
//             Page {page} of {totalPages} |{" "}
//             {startIndex + 1}-{startIndex + paginatedUsers.length} of{" "}
//             {filteredUsers.length}
//           </Typography>

//           <IconButton
//             size="small"
//             disabled={page === totalPages}
//             onClick={() => setPage(page + 1)}
//           >
//             <ChevronRightIcon />
//           </IconButton>
//         </Box>
//       </Box>

//       {/* DELETE CONFIRM */}
//       <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
//         <DialogContent>
//           <Typography mb={2}>Delete User </Typography>
//             <Typography mb={2}>Are you sure you want to delete this user?</Typography>
//           <Box display="flex" justifyContent="flex-end" gap={1}>
//             <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
//             <Button color="error" onClick={handleConfirmDelete}>
//               Confirm
//             </Button>
//           </Box>
//         </DialogContent>
//       </Dialog>

//       {/* EDIT USER MODAL */}
//       <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
//         <DialogContent>
//           <Typography mb={2}>Edit User</Typography>

//           <TextField
//             fullWidth
//             margin="normal"
//             label="Name"
//             value={editForm.name}
//             onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Email"
//             value={editForm.email}
//             onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Phone"
//             value={editForm.phone}
//             onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
//           />
//           <Select
//             fullWidth
//             margin="normal"
//             value={editForm.role}
//             onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
//           >
//             <MenuItem value="Admin">Admin</MenuItem>
//             <MenuItem value="Coach">Coach</MenuItem>
//             <MenuItem value="Player">Player</MenuItem>
//           </Select>
//           <Select
//             fullWidth
//             margin="normal"
//             value={editForm.status}
//             onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
//           >
//             <MenuItem value="Active">Active</MenuItem>
//             <MenuItem value="Inactive">Inactive</MenuItem>
//           </Select>
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Date"
//             type="date"
//             value={editForm.date}
//             onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
//             InputLabelProps={{ shrink: true }}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={editForm.verified}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, verified: e.target.checked })
//                 }
//               />
//             }
//             label="Verified"
//           />
//           <Box mt={2} display="flex" justifyContent="flex-end" gap={1}>
//             <Button variant="contained" onClick={handleEditSave}>
//               Save
//             </Button>
//             <Button variant="outlined" onClick={() => setOpenEdit(false)}>
//               Cancel
//             </Button>
//           </Box>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default UserTable;



import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Chip,
  Select,
  MenuItem,
  Typography,
  Pagination,
  CircularProgress,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  deleteUser,
} from "../redux/UserThunks";
import { setPage, setLimit } from "../redux/UserSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { list, page, limit, total, loading } = useSelector(
    (state) => state.users
  );

  const [role, setRole] = useState("All");

  useEffect(() => {
    dispatch(fetchUsers({ page, limit, role }));
  }, [dispatch, page, limit, role]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Card sx={{ p: 2 }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography fontWeight={600}>Users List</Typography>

        <Select
          size="small"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="Coach">Coach</MenuItem>
          <MenuItem value="Player">Player</MenuItem>
        </Select>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Verified</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {list.map((u, i) => (
            <TableRow key={u._id}>
              <TableCell>{(page - 1) * limit + i + 1}</TableCell>
              <TableCell>{u.firstName} {u.lastName}</TableCell>
              <TableCell>{u.email}</TableCell>
              <TableCell>{u.phone || "N/A"}</TableCell>
              <TableCell>{u.createdAt?.slice(0, 10)}</TableCell>
              <TableCell>
                <Chip label={u.role} />
              </TableCell>
              <TableCell>
                <Chip
                  label={u.verified ? "Yes" : "No"}
                  color={u.verified ? "success" : "error"}
                />
              </TableCell>
              <TableCell>
                <Chip
                  label={u.status}
                  color={u.status === "Active" ? "success" : "default"}
                />
              </TableCell>
              <TableCell>
                <IconButton color="primary">
                  <Edit />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => dispatch(deleteUser(u._id))}
                >
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}

          {list.length === 0 && (
            <TableRow>
              <TableCell colSpan={9} align="center">
                No users found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Box mt={2} display="flex" justifyContent="space-between">
        <Select
          size="small"
          value={limit}
          onChange={(e) => dispatch(setLimit(Number(e.target.value)))}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
        </Select>

        <Pagination
          count={Math.ceil(total / limit)}
          page={page}
          onChange={(e, val) => dispatch(setPage(val))}
        />
      </Box>
    </Card>
  );
};

export default UserList;
