import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  IconButton,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Dialog,
  DialogContent,
  Button,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

/* 🔹 INITIAL USER DATA */
const initialUsers = [
  { id: 1, name: "Pickleball Coach", email: "pickleballclub.ad+5@gmail.com", phone: "8778765665", date: "1/27/2026", role: "Coach", verified: true, status: "Active" },
  { id: 2, name: "Coach Mattner", email: "balanait2001+11@gmail.com", phone: "9033232332", date: "1/27/2026", role: "Coach", verified: true, status: "Inactive" },
  { id: 3, name: "James Test", email: "balanait2001+10@gmail.com", phone: "9033232332", date: "1/27/2026", role: "Player", verified: true, status: "Active" },
  { id: 4, name: "James player test", email: "jamesplayer@test.com", phone: "8778675645", date: "1/27/2026", role: "Player", verified: false, status: "Active" },
  { id: 5, name: "Balan R", email: "cookiefamily.ait@gmail.com", phone: "9033232332", date: "1/27/2026", role: "Admin", verified: true, status: "Active" },
  { id: 6, name: "Coach test", email: "cookiefamily.ait+24@gmail.com", phone: "9033232332", date: "1/27/2026", role: "Player", verified: true, status: "Active" },
  { id: 7, name: "John john", email: "sujisuji7@gmail.com", phone: "9033232332", date: "1/27/2026", role: "Player", verified: true, status: "Active" },
  { id: 8, name: "Test test", email: "sujini1656@gmail.com", phone: "N/A", date: "1/27/2026", role: "Player", verified: true, status: "Active" },
  { id: 9, name: "User user", email: "user9@gmail.com", phone: "N/A", date: "1/27/2026", role: "Player", verified: false, status: "Active" },
];

const UserTable = () => {
  const [users, setUsers] = useState(initialUsers);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  // 🔴 Delete dialog state
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const totalPages = Math.ceil(users.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, users.length);
  const paginatedUsers = users.slice(startIndex, endIndex);

  const handleRowsChange = (e) => {
    setRowsPerPage(e.target.value);
    setPage(1);
  };

  // 🔹 Open delete popup
  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setOpenDelete(true);
  };

  // 🔹 Confirm delete
  const handleConfirmDelete = () => {
    setUsers(users.filter((u) => u.id !== selectedUser.id));
    setOpenDelete(false);
  };

  return (
    <>
      <TableContainer component={Paper} elevation={0}>
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
            {paginatedUsers.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell>{startIndex + index + 1}</TableCell>

                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Avatar sx={{ width: 30, height: 30 }} />
                    <Typography fontSize={14}>{user.name}</Typography>
                  </Box>
                </TableCell>

                <TableCell>
                  <Typography fontSize={13} color="text.secondary">
                    {user.email}
                  </Typography>
                </TableCell>

                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.date}</TableCell>

                <TableCell>
                  <Chip label={user.role} size="small" sx={{ bgcolor: "#1d4ed8", color: "#fff" }} />
                </TableCell>

                <TableCell>
                  {user.verified ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" />}
                </TableCell>

                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: user.status === "Active" ? "green" : "red",
                      }}
                    />
                    <Typography fontSize={13}>{user.status}</Typography>
                  </Box>
                </TableCell>

                {/* ACTION */}
                <TableCell>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton size="small" sx={{ bgcolor: "#2563eb", color: "#fff" }}>
                      <EditIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                      size="small"
                      sx={{ bgcolor: "#dc2626", color: "#fff" }}
                      onClick={() => handleDeleteClick(user)}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* PAGINATION + ENTRIES */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography fontSize={14}>Entries per page:</Typography>
          <FormControl size="small">
            <Select value={rowsPerPage} onChange={handleRowsChange}>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton disabled={page === 1} onClick={() => setPage(page - 1)}>
            <ChevronLeftIcon />
          </IconButton>

          <Typography fontSize={14}>
            Page {page} of {totalPages} | {startIndex + 1}–{endIndex} of {users.length}
          </Typography>

          <IconButton disabled={page === totalPages} onClick={() => setPage(page + 1)}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>

      {/* DELETE CONFIRMATION DIALOG */}
      <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
        <DialogContent sx={{ textAlign: "center", p: 4 }}>
          <Typography fontSize={18} fontWeight={600} mb={1}>
            Delete User
          </Typography>
          <Typography fontSize={14} mb={3}>
            Are you sure you want to delete this user?
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button variant="outlined" onClick={() => setOpenDelete(false)}>
              Cancel
            </Button>
            <Button variant="contained" color="error" onClick={handleConfirmDelete}>
              Confirm
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserTable;
