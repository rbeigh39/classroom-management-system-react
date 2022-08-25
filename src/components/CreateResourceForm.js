import React, { useState } from "react";

import CreateResourceType from "./CreateResourceType";

import classes from "../sass/components/createResourceForm.module.scss";

const CreateResourceForm = (props) => {
  const [resourceType, setResourceType] = useState("attachment");

  return (
    <form>
      <div className={classes["resource-form__group"]}>
        <label
          className={`${classes["resource-form__input-label"]} u-margin-bottom-medium`}
        >
          Type
        </label>
        <CreateResourceType
          resourceType={resourceType}
          setResourceType={setResourceType}
        />
      </div>

      <div className={classes["resource-form__group"]}>
        <label className={classes["resource-form__input-label"]}>Title</label>
        <input
          type="text"
          className={`${classes["resource-form__input"]} ${classes["resource-form__input--title"]}`}
          placeholder="Resource title"
        />
      </div>

      <div className={classes["resource-form__group"]}>
        <label className={classes["resource-form__input-label"]}>
          Description
        </label>
        <textarea
          type="textarea"
          rows="4"
          className={`${classes["resource-form__input"]} ${classes["resource-form__input--description"]}`}
          placeholder="Resource description"
        />
      </div>

      {resourceType === "attachment" && (
        <div className={classes["resource-form__group"]}>
          <label className={classes["resource-form__input-label"]}>
            Attachment
          </label>
          <input
            type="file"
            className={`${classes["resource-form__input"]} ${classes["resource-form__input--attachment"]}`}
            placeholder="Choose a file"
          />
        </div>
      )}

      {resourceType === "link" && (
        <div className={classes["resource-form__group"]}>
          <label className={classes["resource-form__input-label"]}>Link</label>
          <input
            type="text"
            className={`${classes["resource-form__input"]} ${classes["resource-form__input--link"]}`}
            placeholder="Add a link"
          />
        </div>
      )}
    </form>
  );
};

export default CreateResourceForm;
