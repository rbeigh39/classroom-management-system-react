import React from "react";

import classes from "../sass/components/createResourceType.module.scss";

const CreateResourceType = (props) => {
  const { resourceType, setResourceType } = props;

  let backgroundActiveClass = null;

  if (resourceType === "attachment") {
    backgroundActiveClass = `${classes["resource-type__active-bg--left"]}`;
  } else if (resourceType === "link") {
    backgroundActiveClass = `${classes["resource-type__active-bg--right"]}`;
  }

  return (
    <div className={classes["resource-type__container"]}>
      <div
        className={`${classes["resource-type__active-bg"]} ${backgroundActiveClass}`}
      >
        &nbsp;
      </div>
      <div className={classes["resource-type__element"]}>
        <input
          type="radio"
          name="resource-type"
          value={resourceType}
          defaultChecked="checked"
          onChange={() => {
            setResourceType("attachment");
          }}
          className={`${classes["resource-type__radio"]} ${classes["resource-type__radio--attachment"]}`}
          id="attachment"
        />
        <label
          htmlFor="attachment"
          className={classes["resource-type__radio-label"]}
        >
          Attachment
        </label>
      </div>

      <div className={classes["resource-type__element"]}>
        <input
          type="radio"
          name="resource-type"
          value={resourceType}
          className={`${classes["resource-type__radio"]} ${classes["resource-type__radio--link"]}`}
          onChange={() => {
            setResourceType("link");
          }}
          id="link"
        />
        <label htmlFor="link" className={classes["resource-type__radio-label"]}>
          Link
        </label>
      </div>
    </div>
  );
};

export default CreateResourceType;
