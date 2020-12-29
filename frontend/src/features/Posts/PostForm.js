import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../../util/apiURL";
import "../../css/PostForm.css"

const PostForm = () => {
  const [caption, setCaption] = useState("");

  // make an image preview section

  const handleSubmit = async () => {};
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title addPostText" id="exampleModalLongTitle">
              Add New Post
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile02"
                  />
                  <label className="custom-file-label" for="inputGroupFile02">
                    Choose file
                  </label>
                </div>
                <div className="input-group-append">
                  <span className="input-group-text" id="">
                    Upload
                  </span>
                </div>
              </div>
              
              <div className="form-group captionDiv">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Caption"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary addPostSubmit">Submit</button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary addPostSubmit"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
