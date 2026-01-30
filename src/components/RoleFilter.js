
import React from "react";
import {
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const roles = ["All", "Player", "Coach", "Admin"];

const RoleFilter = ({ value, onChange }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (role) => {
    setAnchorEl(null);
    if (role) {
      onChange(role);
    }
  };

  return (
    <>
      <Button
        variant="contained"
        size="small"
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleClick}
        sx={{ textTransform: "none", borderRadius: 2 }}
      >
        {value}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(null)}
      >
        {roles.map((role) => (
          <MenuItem
            key={role}
            onClick={() => handleClose(role)}
          >
            {role}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default RoleFilter;