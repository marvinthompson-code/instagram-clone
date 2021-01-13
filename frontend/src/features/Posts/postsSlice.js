import { createSlice } from "@reduxjs/toolkit";
import { apiURL } from "../../util/apiURL";
import { setLoading } from "../Loading/loadingSlice";
import axios from "axios"

export const postsSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
      addPost: (state, action) => {
        state.unshift(action.payload);
      },
      recieveAllPosts: (state, action) => action.payload,
      deletePost: (state, action) => {
        state.filter((post) => {
          return post.id !== action.payload;
        });
      },
    },
  });

  export const createNewPost = (post) => async (dispatch, getState) => {
    try {
      const state = getState();
      let res = await axios({
        method: "post",
        url: `${apiURL()}/posts`,
        data: post,
        headers: {
          AuthToken: state.token,
        },
      });
      let { newPost } = res.data.body;
      dispatch(addPost(newPost));
    } catch (error) {
    
    }
  };
  

export const selectPosts = (state) => state.posts;
export const { addPost, recieveAllPosts, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
