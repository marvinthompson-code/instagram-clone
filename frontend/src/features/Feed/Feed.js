import React, { useEffect, useState } from "react";
import PostItem from "../Posts/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { recieveAllPosts, selectPosts } from "../Posts/postsSlice";
import { useHistory, useRouteMatch } from "react-router-dom";
import addPost from "../../css/images/add.png";
import { apiURL } from "../../util/apiURL";
import axios from "axios";
import "../../css/Feed.css";

// components
import PostForm from "../Posts/PostForm"

const Feed = () => {
  // general variables, API URL, currently logged in user from state
  const API = apiURL();
  const posts = useSelector(selectPosts);
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();

  // information for the userMenu
  const [profilePicture, setProfilePicture] = useState("");
  const [fullName, setFullName] = useState("");

  // maybe a button that takes you to a modal for a post form?
  // import single post component

  useEffect(() => {
    // useEffect, fetch all posts in the feed
    const fetchPosts = async () => {
      // res
      // dispatch a recieve all posts action, dispatch(recieveAllPosts(res.data.body.posts))
    };
  });
  useEffect(() => {
    const fetchUserInfo = async (id) => {
      let res = await axios.get(`${API}/users/${id}`);
      debugger;
      let { full_name, profile_picture } = res.data.body.single_user;
      setProfilePicture(profile_picture);
      setFullName(full_name);
    };
    fetchUserInfo(user.id);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="postFeed col"></div>
        <div className="userMenu col">
          <div className="row profileMenu">
            <div className={"col menuSection"}>
              <img
                src={profilePicture}
                alt={"profile"}
                className={"profileMenuImg"}
                onClick={() => history.push(`/profile/${user.id}`)}
              />
              <br></br>
              <h2 className={"menuText"}>View Profile</h2>
            </div>

            <div className={"col menuSection"}>
              <img
                src={addPost}
                alt={"addPost"}
                className={"profileMenuImg"}
                data-toggle="modal"
                data-target="#exampleModalCenter"
              />
              <br></br>
              <h2 className={"menuText"}>Add Post</h2>
            </div>
          </div>
        </div>
      </div>
      <PostForm />
    </div>
  );
};

export default Feed;
