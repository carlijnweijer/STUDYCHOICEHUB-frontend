import { Link as RouterLink } from "react-router-dom";

import { Button } from "@material-ui/core";
import React from "react";

export default function LoggedOut() {
  return (
    <div>
      <Button color="inherit" component={RouterLink} to="/login">
        Login
      </Button>
    </div>
  );
}
