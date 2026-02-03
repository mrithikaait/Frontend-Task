// import React, { useState } from "react";
// import { Box, Card, Typography, Button } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";

// import Sidebar from "../components/Sidebar";
// import Topbar from "../components/Topbar";
// import UserTable from "../components/UserTable";
// import RoleFilter from "../components/RoleFilter";
// import AddUserModal from "../components/AddUserModal";

// const UserManagement = () => {
//   const [roleFilter, setRoleFilter] = useState("All");
//   const [openAddUser, setOpenAddUser] = useState(false);

//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f7fb" }}>
//       {/* SIDEBAR */}
//       <Sidebar />

//       {/* MAIN CONTENT */}
//       <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
//         {/* TOPBAR */}
//         <Topbar title="User Management" />

//         {/* PAGE CONTENT */}
//         <Box sx={{ p: 3 }}>
//           <Card sx={{ p: 3, borderRadius: 3 }}>
//             {/* HEADER */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 mb: 2,
//               }}
//             >
//               <Typography fontWeight={600} fontSize={18}>
//                 Users List
//               </Typography>

//               <Box sx={{ display: "flex", gap: 2 }}>
//                 {/* ROLE FILTER */}
//                 <RoleFilter
//                   value={roleFilter}
//                   onChange={setRoleFilter}
//                 />
// {/* 
//           adduser */}
//                 <Button
//                   variant="contained"
//                   startIcon={<AddIcon />}
//                   sx={{
//                     backgroundColor: "#2563eb",
//                     borderRadius: 2,
//                     textTransform: "none",
//                   }}
//                   onClick={() => setOpenAddUser(true)}
//                 >
//                   Add User
//                 </Button>
//               </Box>
//             </Box>

//             {/* USER TABLE */}
//             <UserTable roleFilter={roleFilter} />
//           </Card>
//         </Box>

//         {/* FOOTER */}
//         <Box
//           sx={{
//             mt: "auto",
//             py: 2,
//             textAlign: "center",
//             bgcolor: "#fff",
//             borderTop: "1px solid #e5e7eb",
//           }}
//         >
//           <Typography fontSize={14} color="gray">
//             Copyright © Designed & Developed by{" "}
//             <b style={{ color: "#2563eb" }}>
//               Great Lakes PickleBall Club
//             </b>{" "}
//             2026
//           </Typography>
//         </Box>
//       </Box>

//       {/* ADD USER MODAL */}
//       <AddUserModal
//         open={openAddUser}
//         onClose={() => setOpenAddUser(false)}
//       />
//     </Box>
//   );
// };

// export default UserManagement;


import React, { useState } from "react";
import { Box, Card, Typography, Button } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import UserTable from "../components/UserTable";
import RoleFilter from "../components/RoleFilter";
import AddUserModal from "../components/AddUserModal";

const UserManagement = () => {
  const [roleFilter, setRoleFilter] = useState("All");
  const [openAdd, setOpenAdd] = useState(false);
  const [newUser, setNewUser] = useState(null);

  // 🔥 Called when modal adds a user
  const handleUserAdded = (user) => {
    setNewUser(user); // pass to table
    setOpenAdd(false);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f7fb" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Topbar title="User Management" />

        <Box sx={{ p: 3 }}>
          <Card sx={{ p: 3, borderRadius: 3 }}>
            {/* HEADER */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography fontWeight={600} fontSize={18}>
                Users List
              </Typography>

              <Box display="flex" gap={2}>
                <RoleFilter value={roleFilter} onChange={setRoleFilter} />

                <Button
                  variant="contained"
                  onClick={() => setOpenAdd(true)}
                >
                  + Add User
                </Button>
              </Box>
            </Box>

            {/* USER TABLE */}
            <UserTable
              roleFilter={roleFilter}
              newUser={newUser}
            />
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

      {/* ADD USER MODAL */}
      <AddUserModal
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onUserAdded={handleUserAdded}
      />
    </Box>
  );
};

export default UserManagement;
