import React, { useState, useEffect } from "react";
import PostDataService from "../services/PostService";

const EditPost = props => {
  const initialPostState = {
    id: null,
    title: "",
    content: ""
  };
  const [currentPost, setCurrentPost] = useState(initialPostState);
  const [message, setMessage] = useState("");

  const getPost = id => {
    PostDataService.get(id)
      .then(response => {
        setCurrentPost(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getPost(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentPost({ ...currentPost, [name]: value });
  };

  const updatePost = () => {
    PostDataService.update(currentPost.postId, currentPost)
      .then(response => {
        setMessage("The post was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentPost ? (
        <div className="edit-form">
          <h4>Post</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentPost.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <input
                type="text"
                className="form-control"
                id="content"
                name="content"
                value={currentPost.content}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updatePost}
          >
            Update
          </button>
          <p><br /><br />{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Post...</p>
        </div>
      )}
    </div>
  );
};

export default EditPost;