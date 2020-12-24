import React, { useState } from "react";
import { storage } from "../../firebase";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { apiURL } from "../../util/apiURL";
import { signUp } from "../../util/firebaseFunctions";
import "../../css/SignupForm.css";

const SignUpForm = () => {
  // states
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [profile_picture, setProfilePicture] = useState("");

  // image states
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [toggleUploadMsg, setToggleUploadMsg] = useState(false);

  // variables
  const API = apiURL();
  const history = useHistory();
  const dispatch = useDispatch();

  // image Upload

  
  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await signUp(email, password);
      console.log("Show user", res)
      await axios.post(`${API}/users/addUser`, {
        id: res.user.uid,
        email,
        full_name
      })
      // axios post request to users table
      // pass in information as an object
    } catch (error) {}
  };

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    const types = ["image/png", "image/jpeg", "image/gif", "image/jpg"];
    if (types.every((type) => image.type !== type)) {
      alert(`${image.type} is not a supported format`);
    } else {
      setImageAsFile((imageFile) => image);
    }
  };

  const handleFirebaseUpload = () => {
    if (imageAsFile === "") {
      alert("Please choose a valid file before uploading");
    } else if (imageAsFile !== null) {
      const uploadTask = storage
        .ref(`/images/${imageAsFile.name}`)
        .put(imageAsFile);
      uploadTask.on(
        "state_changed",
        (snapShot) => {
          console.log(snapShot);
        },
        (err) => {
          console.log(err);
        },
        () => {
          storage
            .ref("images")
            .child(imageAsFile.name)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              setImageUrl(fireBaseUrl);
            });
        }
      );
      setToggleUploadMsg(true);
    } else {
      setToggleUploadMsg(false);
    }
  };

  return (
    <div className="jumbotron signupJumbo">
      <h1 className="display-4 FakerGramHeader">FakerGram</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group emailDiv">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Full Name"
            value={full_name}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group emailDiv">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group passwordDiv">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group emailDiv">
          <input
            type="file"
            className="form-control uploadProfilePicture"
            onChange={handleImageAsFile}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Select Profile Picture"
          />
        </div>

        <div className="form-group emailDiv">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter a Bio..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="buttonDiv">
          <button type="submit" className="btn btn-primary submitButton">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
