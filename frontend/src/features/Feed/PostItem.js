import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { apiURL } from "../../util/apiURL";
import axios from "axios";
import "../../css/PostCard.css"

const PostItem = ({ post }) => {
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
  <div class="card postCard" style={{width: "20rem"}}>
    <div class="card-header">
    Featured
  </div>
  <img class="card-img-top postImage" src={post_image_url} alt="Card image cap"/>
  <div class="card-body">
    <p class="card-text postCaption">{caption}</p>
    <p className="timeStamp">{time_stamp}</p>
  </div>
</div>
  )
};

export default PostItem;
