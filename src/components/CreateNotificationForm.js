import React from "react";

import CreateNotificationType from "./CreateNotificationType";

import classes from "../sass/components/createNotificationForm.module.scss";

const CreateNotificationForm = (props) => {
  return (
    <form>
      <CreateNotificationType />
    </form>
  );
};

export default CreateNotificationForm;
