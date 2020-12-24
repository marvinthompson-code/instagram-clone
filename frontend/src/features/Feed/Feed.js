import React, { useEffect } from "react";

const Feed = () => {

  // maybe a button that takes you to a modal for a post form?
  // import single post component

  useEffect(() => {
    // useEffect, fetch all posts in the feed
    const fetchPosts = async () => {
        // res
        // dispatch a recieve all posts action, dispatch(recieveAllPosts(res.data.body.posts))
    }

  });
  return (
    <div className="container">
      <div className="postFeed"></div>
    </div>
  );
};

export default Feed;
