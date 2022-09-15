import React, { useState, useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import dateFormater from "../utilities/dateFormater";

import TabHeader from "../components/TabHeader";
import FeedPost from "../components/FeedPost";

import classes from "../sass/pages/feed.module.scss";

const Feed = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/api/v1/posts?page=${curPage}&limit=10`,
      method: "GET",
      withCredentials: true,
    })
      .then((res) => {
        const posts = res.data.data.posts;

        const keys = Object.keys(posts);
        const postsArr = keys.map((cur) => {
          return posts[cur];
        });

        setPosts((prevState) => {
          return [...prevState, ...postsArr];
        });
      })
      .catch((err) => {
        console.log(err);
        window.alert("error loading posts!");
      });
  }, []);

  const openCommentBar = (postId) => {
    console.log("from function to open comment tab: ", postId);
    navigate(`/tab-pages/home/comment-tab/${postId}`);
  };

  return (
    <>
      <TabHeader title="News Feed" />
      <main className={classes["news-feed__page"]}>
        {posts.map((cur) => {
          const image = cur.image;
          let imgLink = null;

          // dateFormater(cur.createdAt);

          // console.log("the timestamp is: ", dateFormater(cur.createdAt));

          if (image) {
            imgLink = `${process.env.REACT_APP_BACKEND_URL}/img/posts/${image}`;
          } else {
            imgLink = "";
          }

          return (
            <FeedPost
              key={cur._id}
              postId={cur._id}
              userName={cur.author.name}
              userImage={`${process.env.REACT_APP_BACKEND_URL}/img/users/${cur.author.photo}`}
              onClick={openCommentBar}
              imageLink={imgLink}
              postText={cur.message}
              timeStamp={dateFormater(cur.createdAt)}
              likes={cur.likes}
            />
          );
        })}

        {/* <FeedPost
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
        /> */}
      </main>

      <Outlet />
    </>
  );
};

export default Feed;
