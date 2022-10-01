import React, { useState, useEffect, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

import classes from "../sass/pages/profile.module.scss";

import ProfileTab from "../components/ProfileTab";
import FeedPost from "../components/FeedPost";
import ProfileComment from "../components/ProfileComment";
import AuthContext from "../store/authContext";

import dateFormater from "../utilities/dateFormater";

const loadData = async (type) => {
  let urlEndPoint = null;

  if (type === "createdByMe") urlEndPoint = "/api/v1/users/posts";
  if (type === "likedByMe") urlEndPoint = "/api/v1/users/likes";
  if (type === "myComments") urlEndPoint = "/api/v1/users/comments";

  const res = await axios({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND_URL}${urlEndPoint}`,
    withCredentials: true,
  });

  return res;
};

const Profile = (props) => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const user = authCtx.user;

  const [profileTab, setProfileTab] = useState("posts");

  const [selfCreatedPosts, setSelfCreatedPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [myComments, setMyComments] = useState([]);

  const removePost = (postId) => {
    if (profileTab === "posts") {
      setSelfCreatedPosts((prevState) => {
        return prevState.filter((cur) => cur._id !== postId);
      });
    }

    if (profileTab === "likes") {
      setLikedPosts((prevState) => {
        return prevState.filter((cur) => {
          if (!cur.post) return false;
          return cur.post._id !== postId;
        });
      });
    }
  };

  useEffect(() => {
    if (profileTab === "posts") {
      loadData("createdByMe")
        .then((res) => {
          setSelfCreatedPosts((prevState) => [...res.data.data.posts]);
        })
        .catch((err) => {
          console.log("something went wrong fetching posts! ", err);
        });
    }

    if (profileTab === "likes") {
      loadData("likedByMe")
        .then((res) => {
          setLikedPosts((prevState) => [...res.data.data.posts]);
        })
        .catch((err) => {
          console.log("something went wrong fetching posts!", err);
        });
    }

    if (profileTab === "comments") {
      loadData("myComments")
        .then((res) => {
          setMyComments((prevState) => [...res.data.data.comments]);
        })
        .catch((err) => {
          console.log("Something wrong fetching comments!", err);
        });
    }
  }, [profileTab]);

  const openCommentBar = (postId) => {
    navigate(`/profile/comment-tab/${postId}`);
  };

  return (
    <div className={classes["profile-page__container"]}>
      <div className={classes["profile-page__background"]}>&nbsp;</div>

      <div className={classes["profile-header__container"]}>
        <Link to="/tab-pages/home" className={classes["profile-header__icon"]}>
          <img
            src="/assets/icon_home.svg"
            alt="Home"
            className={`${classes["profile-header__icon-home"]}`}
          />
        </Link>

        <h1 className={classes["profile-header__heading"]}>Profile</h1>

        <Link to="/settings" className={classes["profile-header__icon"]}>
          <img
            src="/assets/icon_settings.svg"
            alt="Settings"
            className={`${classes["profile-header__icon-settings"]}`}
          />
        </Link>
      </div>

      <div className={classes["profile-info__container"]}>
        <figure className={classes["profile-info__image-container"]}>
          <img
            className={classes["profile-info__profile-picture"]}
            src={`${process.env.REACT_APP_BACKEND_URL}/img/users/${user.photo}`}
            alt="Profile"
          />
        </figure>

        <h2 className={classes["profile-info__name"]}>{user.name}</h2>
        <p className={classes["profile-info__tagline"]}>{user.tagLine}</p>
      </div>

      <ProfileTab profileTab={profileTab} setProfileTab={setProfileTab} />

      <div className={classes["profile-items__container"]}>
        {profileTab === "posts" &&
          selfCreatedPosts.map((cur) => {
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

        {profileTab === "likes" &&
          likedPosts.map((curEl) => {
            if (!curEl.post) return null;

            const cur = curEl.post;

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

        {profileTab === "comments" &&
          myComments.map((cur) => {
            return (
              <ProfileComment
                key={cur._id}
                timeStamp={dateFormater(cur.createdAt)}
                comment={cur.comment}
              />
            );
          })}

        {/* {profileTab === 'comments' && } */}

        {/* <ProfileComment /> */}

        {/*
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
            likesCount={cur.noOfLikes}
            commentsCount={cur.noOfComments}
          /> 
        */}
      </div>

      <Outlet />
    </div>
  );
};

export default Profile;
