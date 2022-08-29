import React from "react";

import CreateHeader from "../components/CreateHeader";

import classes from "../sass/pages/createPost.module.scss";

const CreatePost = (props) => {
  return (
    <div className={classes["create-post-page"]}>
      <CreateHeader backLink="/tab-pages/home" />

      <form className={classes["create-post__form"]}>
        <textarea
          rows="20"
          className={classes["create-post__textarea"]}
          placeholder="What do you want to say?"
        ></textarea>

        <label
          htmlFor="post-textarea"
          className={classes["create-post__add-image-label"]}
        >
          <img
            src="/assets/icon_plus.svg"
            alt="icon add"
            className={classes["create-post__add-icon"]}
          />
          Add Image
        </label>
        <input
          type="file"
          className={classes["create-post__add-image-btn"]}
          id="post-textarea"
        />
      </form>
    </div>
  );
};

export default CreatePost;
