import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { AccountCircle } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";

export default function LoggedIn() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const user = useSelector(selectUser);
  const role = user.role;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const studentControls =
    role === "student" ? (
      <MenuItem onClick={handleClose} component={RouterLink} to="/writeReview">
        Write a Review
      </MenuItem>
    ) : null;

  return (
    <div>
      <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {studentControls}
          <MenuItem onClick={handleClose} component={RouterLink} to="/logout">
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
