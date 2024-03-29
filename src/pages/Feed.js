import React, { useState, useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import dateFormater from "../utilities/dateFormater";

import TabHeader from "../components/TabHeader";
import FeedPost from "../components/FeedPost";

import classes from "../sass/pages/feed.module.scss";

const Feed = () => {
  const navigate = useNavigate();
  const postsContainerRef = useRef();

  const [posts, setPosts] = useState([]);
  const [curPage, setCurPage] = useState(1);

  let loadingPending = false;

  const removePost = (postId) => {
    console.log("the post id is: ", postId);
    setPosts((prevState) => {
      return prevState.filter((cur) => cur._id !== postId);
    });
  };

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
  }, [curPage]);

  const onScrollFeedContainer = () => {
    if (loadingPending) return;

    if (postsContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        postsContainerRef.current;

      if (scrollTop + clientHeight === scrollHeight) {
        loadingPending = true;
        setCurPage(() => curPage + 1);
      }
    }
  };

  const openCommentBar = (postId) => {
    navigate(`/tab-pages/home/comment-tab/${postId}`);
  };

  return (
    <>
      <TabHeader title="News Feed" />

      <main
        className={classes["news-feed__page"]}
        ref={postsContainerRef}
        onScroll={onScrollFeedContainer}
      >
        {posts.map((cur) => {
          const image = cur.image;
          let imgLink = null;

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
              userId={cur.author._id}
              userImage={`${process.env.REACT_APP_BACKEND_URL}/img/users/${cur.author.photo}`}
              onClick={openCommentBar}
              imageLink={imgLink}
              postText={cur.message}
              timeStamp={dateFormater(cur.createdAt)}
              likes={cur.likes}
              likesCount={cur.noOfLikes}
              commentsCount={cur.noOfComments}
              removePost={removePost}
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
        />*/}
      </main>

      <Outlet />
    </>
  );
};

export default Feed;
