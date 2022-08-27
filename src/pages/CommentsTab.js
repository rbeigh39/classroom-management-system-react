import React from "react";

import { useNavigate } from "react-router-dom";

import Comment from "../components/Comment";

import classes from "../sass/pages/commentsTab.module.scss";

const CommentsTab = (props) => {
  const navigate = useNavigate();

  return (
    <section className={classes["comments-tab__container"]}>
      <div className={classes["comments-tab__close-btn-container"]}>
        <button
          className={classes["comments-tab__close-button"]}
          onClick={() => navigate("/tab-pages/home")}
        >
          Close
        </button>
      </div>

      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />

      <div className={classes["comments-tab__input-container"]}>
        <input
          type="text"
          className={classes["comments-tab__input"]}
          placeholder="Write a comment..."
        />
      </div>
    </section>
  );
};

export default CommentsTab;