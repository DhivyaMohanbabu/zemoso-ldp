import React, { useState } from "react";
import PostDataService from "../services/PostService";

const AddPost = () => {
  const initialPostState = {
    id: null,
    title: "",
    content: ""
  };
  const [post, setPost] = useState(initialPostState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const savePost = () => {
    var data = {
      title: post.title,
      content: post.content
    };

    PostDataService.create(data)
      .then(response => {
        setPost({
          id: response.data.postId,
          title: response.data.title,
          content: response.data.content,
        });
        setSubmitted(true);
      })
      .catch(e => {
        console.log("adding a new post " + e);
      });
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You have added a new Post successfully!</h4>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={post.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <input
              type="text"
              className="form-control"
              id="content"
              required
              value={post.content}
              onChange={handleInputChange}
              name="content"
            />
          </div>

          <button onClick={savePost} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPost;