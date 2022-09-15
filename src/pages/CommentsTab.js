import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

import Comment from "../components/Comment";

import classes from "../sass/pages/commentsTab.module.scss";

const CommentsTab = (props) => {
  const navigate = useNavigate();
  const latestCommentRef = useRef(null);

  const [comments, setComments] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/comments/${postId}`,
      withCredentials: true,
    })
      .then((res) => {
        setComments(() => [...res.data.data.comments]);
      })
      .catch((err) => {
        console.log("error fetching comments: ", err);
        window.alert("Error fetching comments!");
      });
  }, []);

  useEffect(() => {
    latestCommentRef.current?.scrollIntoView();
  }, [comments]);

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

      {comments.map((cur) => {
        return (
          <Comment
            key={cur.author}
            name={cur.author.name}
            photo={cur.author.photo}
            comment={cur.comment}
          />
        );
      })}

      <div ref={latestCommentRef}>&nbsp;</div>

      {/* <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment /> */}

      <div className={classes["comments-tab__input-container"]}>
        <input
          type="text"
          className={classes["comments-tab__input"]}
          placeholder="Write a comment..."
        />
        <button className={classes["comments-tab__send-button"]}>
          <img
            src="/assets/icon_send.svg"
            alt="send icon"
            className={classes["comments-tab__send-icon"]}
          />
        </button>
      </div>
    </section>
  );
};

export default CommentsTab;
