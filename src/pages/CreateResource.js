import React from "react";

import CreateHeader from "../components/CreateHeader";
import CreateResourceForm from "../components/CreateResourceForm";

import classes from "../sass/pages/createResource.module.scss";

const CreateResource = () => {
  return (
    <div className={classes["create-resource-page"]}>
      <CreateHeader backLink="/tab-pages/resources" />

      <h1 className={classes["create-resource__heading"]}>Create Resource</h1>

      <CreateResourceForm />
    </div>
  );
};

export default CreateResource;
