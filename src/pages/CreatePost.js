import React, { useState, useEffect } from "react";
import axios from "axios";

import CreateHeader from "../components/CreateHeader";

import classes from "../sass/pages/createPost.module.scss";

const postPost = async (message, image) => {
  const formData = new FormData();

  if (message) formData.append("message", message);
  if (image) formData.append("image", image);

  const res = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/posts/`,
    withCredentials: true,
    data: formData,
  });

  return res;
};

const CreatePost = (props) => {
  const [btnIsActive, setBtnIsActive] = useState(false);
  const [postMessage, setPostMessage] = useState("");
  const [postImage, setPostImage] = useState("");

  useEffect(() => {
    if (postMessage.replace(/\s+/g, "") === "" && postImage === "")
      return setBtnIsActive(false);

    setBtnIsActive(true);
  }, [postMessage, postImage]);

  const cretaPostHandlerFn = async () => {
    try {
      const res = await postPost(postMessage, postImage);

      setPostMessage(() => "");
      setPostImage(() => "");

      window.alert(res.data.message);
    } catch (err) {
      console.log("something went wrong!", err);
      window.alert("Failed creating new post!");
    }
  };

  return (
    <div className={classes["create-post-page"]}>
      <CreateHeader
        backLink="/tab-pages/home"
        btnIsActive={btnIsActive}
        btnOnClickHandlerFn={cretaPostHandlerFn}
      />

      <form className={classes["create-post__form"]}>
        <textarea
          rows="20"
          className={classes["create-post__textarea"]}
          placeholder="What do you want to say?"
          value={postMessage}
          onChange={(e) => {
            setPostMessage(e.target.value);
          }}
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
          accept="image/*"
          className={classes["create-post__add-image-btn"]}
          id="post-textarea"
          onChange={(e) => {
            setPostImage(e.target.files[0]);
          }}
        />
      </form>
    </div>
  );
};

export default CreatePost;
