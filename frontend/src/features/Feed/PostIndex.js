import React, { useEffect } from 'react'
import axios from "axios";
import { apiURL } from "../../util/apiURL";
import { useDispatch, useSelector } from "react-redux";
import { recieveAllPosts, selectPosts } from "../Posts/postsSlice";
import PostItem from './PostItem'
import camera from "../../css/images/camera.png"
import "../../css/PostIndex.css"

const PostIndex = () => {
    const dispatch = useDispatch()
    const API = apiURL()
    const posts = useSelector(selectPosts)

    let feedPosts = posts.map((post)=> {
        return (
            <div key={post.id}>
                <PostItem post={post} key={post.id}/>
            </div>
        )
    })

  useEffect(() => {
    const fetchPosts = async () => {
        let res = await axios.get(`${API}/posts`);
        dispatch(recieveAllPosts(res.data.body.posts));
    };
    fetchPosts()
  }, []);

    return (
            <ul className={"feedPosts text-center vertical-center"}>{feedPosts.length === 0 ?(
                <>
                <img src={camera} className={"camera"}/>
                 <h1>No Posts to Show</h1>
                 </>
             ) : feedPosts}</ul>
    )
}

export default PostIndex