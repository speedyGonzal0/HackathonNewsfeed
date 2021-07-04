import "./Write.css";
import { useState } from "react";
import Axios from "axios";
//import { useHistory } from "react-router-dom";

export default function Write() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // const history = useHistory();

    const submitPost = () => {
        Axios.post('http://localhost:3001/api/postsubmit', {
            title: title,
            postBody: body
        })
    }






  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e) => {
                setTitle((e.target.value));
            }}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => {
                setBody((e.target.value));
            }}
          />
        </div>
        <button className="writeSubmit" type="submit" onClick={submitPost}>
          Publish
        </button>
      </form>
    </div>
  );
}