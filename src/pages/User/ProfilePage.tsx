import { Avatar, Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";

export default function ProfilePage() {
  const user = useSelector(selectUser);

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <Avatar />
      <Button>Click here to change your profile picture</Button>

      <p>study</p>
    </div>
  );
}

//user name
//user picture? show/edit : upload
//city
//study
