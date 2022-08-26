import React from "react";

import TabHeader from "../components/TabHeader";
import FeedPost from "../components/FeedPost";

import classes from "../sass/pages/feed.module.scss";

const Feed = () => {
  return (
    <>
      <TabHeader title="News Feed" />
      <main className={classes["news-feed__page"]}>
        <FeedPost />
      </main>
    </>
  );
};

export default Feed;
