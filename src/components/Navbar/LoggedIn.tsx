import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function LoggedIn() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose} component={RouterLink} to="/logout">
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
