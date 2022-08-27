import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import TabHeader from "../components/TabHeader";
import FeedPost from "../components/FeedPost";

import classes from "../sass/pages/feed.module.scss";

const Feed = () => {
  const navigate = useNavigate();
  const openCommentBar = () => {
    navigate(`/tab-pages/home/comment-tab`);
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

      <Outlet />
    </>
  );
};

export default Feed;
