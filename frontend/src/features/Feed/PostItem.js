import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { apiURL } from "../../util/apiURL";
import axios from "axios";

const PostItem = ({ post }) => {
  debugger
  // variables
  const history = useHistory();
  const API = apiURL();
  // state variables
  let { caption, id, owner_id, post_image_url, time_stamp } = post
  
  // post.time_stamp
  // postowner username
  // postowner profilepic
  // giv the div an id of post.id

  const [ username, setUsername] = useState("")
  const [ profilePicture, setProfilePicture] = useState("")
  
  useEffect(() => {
    const fetchPostOwnerInfo = async (id) => {
      // axios.get request on the post.owner_id
    };
    // call fetchPostOwnerInfo on post.owner_id
  }, []);
  return(
  <div className={"container"}>
  <div className={"postItemDiv"} key={post.id}>
    <img src={post_image_url} alt={"post image"} />
    <p className="postItemCaption">{caption}</p>
    <p className={"postItemTimeStamp"}>{time_stamp}</p>
  </div>
  </div>
  )
};

export default PostItem;
