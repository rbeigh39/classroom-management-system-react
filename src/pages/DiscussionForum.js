import React from "react";

import TabHeader from "../components/TabHeader";
import ChatItem from "../components/ChatItem";
import ForumForm from "../components/ForumForm";
// import WorkInProgress from "./WorkInProgress";

import classes from "../sass/pages/discussionForum.module.scss";

const DiscussionForum = () => {
  return (
    <>
      <TabHeader title="Discussion Forum" />
      <main className={classes["discussion-forum__page"]}>
        <img
          src="./assets/chat-background.jpg"
          alt="chat background"
          className={classes["discussion-forum__background-img"]}
        />

        <div className={classes["discussion-forum__chat-container"]}>
          <ChatItem type="foreign" />
          <ChatItem type="local" />
          <ChatItem type="foreign" />
          <ChatItem type="foreign" />
          <ChatItem type="foreign" />
          <ChatItem type="foreign" />
        </div>

        <div className={classes["discussion-forum__form-container"]}>
          <ForumForm />
        </div>
      </main>
      {/* <WorkInProgress /> */}
    </>
  );
};

export default DiscussionForum;
