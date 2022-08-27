import React, { useState } from "react";

import TabHeader from "../components/TabHeader";
import FeedPost from "../components/FeedPost";
import Comment from "../components/Comment";

import classes from "../sass/pages/feed.module.scss";

const Feed = () => {
  const [commentBarOpenStatus, setCommentBarOpenStatus] = useState(false);

  const openCommentBar = () => {
    setCommentBarOpenStatus(true);
  };

  return (
    <>
      <TabHeader title="News Feed" />
      <main className={classes["news-feed__page"]}>
        <FeedPost
          userName="Rayan Beigh"
          userImage="/users/man-1.jpg"
          onClick={openCommentBar}
          imageLink="/users/img-1.jpg"
          postText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          debitis eveniet modi nulla. Consequuntur odio."
          timeStamp="Aug 23, 11:30pm"
        />

        <FeedPost
          userName="Minzah Rafiq"
          userImage="/users/women-1.jpg"
          onClick={openCommentBar}
          postText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          debitis eveniet modi nulla. Consequuntur odio."
          timeStamp="Aug 21, 10:01am"
        />

        <FeedPost
          userName="Minzah Rafiq"
          userImage="/users/women-1.jpg"
          onClick={openCommentBar}
          postText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          debitis eveniet modi nulla. Consequuntur odio."
          timeStamp="Aug 21, 10:01am"
        />

        <FeedPost
          userName="Rayan Beigh"
          userImage="/users/man-1.jpg"
          onClick={openCommentBar}
          imageLink="/users/img-2.jpg"
          postText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          debitis eveniet modi nulla. Consequuntur odio."
          timeStamp="Aug 23, 11:30pm"
        />

        <FeedPost
          userName="Minzah Rafiq"
          userImage="/users/women-1.jpg"
          onClick={openCommentBar}
          postText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          debitis eveniet modi nulla. Consequuntur odio."
          timeStamp="Aug 21, 10:01am"
        />
      </main>

      {commentBarOpenStatus && (
        <section className={classes["comments-tab__container"]}>
          <div className={classes["comments-tab__close-btn-container"]}>
            <button
              className={classes["comments-tab__close-button"]}
              onClick={() => setCommentBarOpenStatus(false)}
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
      )}
    </>
  );
};

export default Feed;
