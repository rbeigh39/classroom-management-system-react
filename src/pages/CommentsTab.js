import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

import Comment from "../components/Comment";

import classes from "../sass/pages/commentsTab.module.scss";

const postComment = async (postId, comment) => {
  const res = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/comments/${postId}`,
    withCredentials: true,
    data: {
      comment,
    },
  });

  return res;
};

const CommentsTab = (props) => {
  const navigate = useNavigate();
  const latestCommentRef = useRef(null);
  const { postId } = useParams();

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newPostedComment, setNewPostedComment] = useState("");

  const postCommentHandler = async () => {
    if (newComment.replace(/\s+/g, "") === "") return;

    try {
      const res = await postComment(postId, newComment);
      setNewPostedComment((prevState) => res.data.data.newComment);
      setNewComment(() => "");
    } catch (err) {
      console.log("Error posting comment!");
      window.alert("Error posting comment!");
    }
  };

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
  }, [newPostedComment]);

  useEffect(() => {
    latestCommentRef.current?.scrollIntoView();
  }, [comments]);

  return (
    <section className={classes["comments-tab__container"]}>
      <div className={classes["comments-tab__close-btn-container"]}>
        <button
          className={classes["comments-tab__close-button"]}
          onClick={() => navigate(props.backLink)}
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
          onKeyDown={(e) => {
            if (e.keyCode === 13 || e.which === 13) {
              postCommentHandler();
            }
          }}
          value={newComment}
          onChange={(e) => {
            setNewComment(() => e.target.value);
          }}
        />
        <button
          className={classes["comments-tab__send-button"]}
          onClick={postCommentHandler}
        >
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
