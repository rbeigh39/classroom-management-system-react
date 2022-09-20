import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";

import TabHeader from "../components/TabHeader";
import ChatItem from "../components/ChatItem";
import ForumForm from "../components/ForumForm";
import AuthContext from "../store/authContext";
// import WorkInProgress from "./WorkInProgress";

import classes from "../sass/pages/discussionForum.module.scss";

const postMessageHandler = async (message, image) => {
  const messageForm = new FormData();

  if (message) messageForm.append("message", message);
  if (image) messageForm.append("photo", image);

  const res = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/messages/`,
    withCredentials: true,
    data: messageForm,
  });

  return res;
};

const DiscussionForum = () => {
  const authCtx = useContext(AuthContext);
  const userId = authCtx.user._id;
  const lastMessageRef = useRef();

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [messageImage, setMessageImage] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/messages/`,
      withCredentials: true,
    })
      .then((res) => {
        setMessages((prevState) => [
          ...messages,
          ...res.data.data.messages.reverse(),
        ]);
      })
      .catch((err) => {
        console.log("something went wrong!", err);
        window.alert("Something went wrong fetching messages!");
      });
  }, []);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView();
  }, [messages]);

  const messageSubmitHandler = async () => {
    try {
      const res = await postMessageHandler(newMessage, messageImage);

      console.log(res.data.data.message);

      setNewMessage(() => "");
      setMessages(() => [...messages, res.data.data.message]);
    } catch (err) {
      console.log("Something went wrong posting message!", err);
      window.alert("Something went wrong posting message!");
    }
  };

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
          {messages.map((cur) => {
            return (
              <ChatItem
                key={cur._id}
                type={userId === cur.author._id ? "local" : "foreign"}
                message={cur.message}
                image={cur.photo ? cur.photo : undefined}
                userImage={cur.author.photo}
                name={cur.author.name}
              />
            );
          })}

          <div ref={lastMessageRef}></div>

          {/* <ChatItem
            type="foreign"
            message="this is the new message from me"
            image="user-631b08adaad9bb4688170a14-1662805260925.jpeg"
            userImage="user-631b08adaad9bb4688170a14-1662827282073.jpeg"
          />
          <ChatItem type="local" />
          <ChatItem type="foreign" />
          <ChatItem type="foreign" />
          <ChatItem type="foreign" />
          <ChatItem type="foreign" /> */}
        </div>

        <div className={classes["discussion-forum__form-container"]}>
          <ForumForm
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            messageImage={messageImage}
            setMessageImage={setMessageImage}
            messageSubmitHandler={messageSubmitHandler}
          />
        </div>
      </main>
      {/* <WorkInProgress /> */}
    </>
  );
};

export default DiscussionForum;
