import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { apiURL } from "../../util/apiURL";
import axios from "axios";

const PostItem = ({ post }) => {
  // variables
  const history = useHistory();
  const API = apiURL();

  // state variables
  const [ username, setUsername] = useState("")
  const [ profilePicture, setProfilePicture] = useState("")


  // post.caption
  // post.post_image_url
  // post.time_stamp
  // giv the div an id of post.id

  useEffect(() => {
    const fetchPostOwnerInfo = async (id) => {
      // axios.get request on the post.owner_id
    };
    // call fetchPostOwnerInfo on post.owner_id
  }, []);
  return <div></div>;
};

export default PostItem;
