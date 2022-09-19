import React from "react";

import classes from "../sass/components/forumForm.module.scss";

const forumForm = (props) => {
  console.log("rendering this component!");

  return (
    <form className={classes["form__container"]}>
      <div className={classes["form__add-container"]}>
        <label htmlFor="add-file" className={classes["form__add-label"]}>
          <img
            className={classes["form__add-icon"]}
            src="/assets/icon_attachment.svg"
            alt="attachment"
          />
        </label>
        <input
          type="file"
          id="add-file"
          className={classes["form__add-input"]}
        />
      </div>
      <div className={classes["form__add-container"]}>
        <label htmlFor="add-image" className={classes["form__add-label"]}>
          <img
            className={classes["form__add-icon"]}
            src="/assets/icon_image.svg"
            alt="attachment"
          />
        </label>
        <input
          type="file"
          accept="image/*"
          id="add-image"
          className={classes["form__add-input"]}
        />
      </div>
      <input
        type="text"
        className={classes["form__text-input"]}
        placeholder="Type something..."
      />
      <button className={classes["form__submit-btn"]}>
        <img
          className={classes["form__submit-icon"]}
          src="/assets/icon_send.svg"
          alt="icon send"
        />
      </button>
    </form>
  );
};

export default forumForm;
