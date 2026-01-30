
// import React from "react";
// import { Box, Card, CardContent, Typography, Avatar } from "@mui/material";

// const StatCard = ({ title, value, icon, color }) => {
//   return (
//     <Card
//       sx={{
//         borderRadius: 3,
//         boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
//         position: "relative",
//         backgroundColor: "#fff",
//       }}
//     >
//       <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//         <Avatar
//           sx={{
//             bgcolor: color,
//             width: 56,
//             height: 56,
//           }}
//         >
//           {icon}
//         </Avatar>

//         <Box>
//           <Typography fontSize={14} color="text.secondary">
//             {title}
//           </Typography>
//           <Typography variant="h5" fontWeight={700}>
//             {value}
//           </Typography>
//         </Box>
//       </CardContent>

//       {/* Bottom color bar */}
//       <Box
//         sx={{
//           height: 4,
//           bgcolor: color,
//           borderBottomLeftRadius: 12,
//           borderBottomRightRadius: 12,
//         }}
//       />
//     </Card>
//   );
// };

// export default StatCard;

import { Card, Box, Typography } from "@mui/material";

const StatCard = ({ title, value, color, icon }) => {
  return (
    <Card
      sx={{
        p: 4,
        height: 110, 
        width:390,         // 🔥 BIG CARD
        borderRadius: 4,
        boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* CONTENT */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        {/* ICON - LEFT */}
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            bgcolor: `${color}22`,
            color: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,     // 🔥 BIG ICON
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>

        {/* TEXT */}
        <Box>
          <Typography fontSize={14} color="gray">
            {title}
          </Typography>

          <Typography fontSize={32} fontWeight={700} mt={0.5}>
            {value}
          </Typography>
        </Box>
      </Box>

      {/* BOTTOM COLOR LINE */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 4,
          bgcolor: color,
        }}
      />
    </Card>
  );
};

export default StatCard;
