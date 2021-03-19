import React, { useState, useEffect } from "react";
import PostDataService from "../services/PostService";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const retrievePosts = (props) => {
    PostDataService.getAll()
      .then(response => {
        setPosts(response.data);
      })
      .catch(e => {
        console.log("retrievePosts error -> " + e);
      });
  };

  useEffect(() => { // Similar to ComponentDidMount
    console.log("Post List Component mount");
    retrievePosts();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const refreshList = () => {
    retrievePosts();
    setCurrentPost(null);
    setCurrentIndex(-1);
  };

  const setActivePost = (selectedPost, index) => {
    setCurrentPost(selectedPost);
    setCurrentIndex(index);
  };

  const findByTitle = () => {
    PostDataService.findByTitle(searchTitle)
      .then(response => {
        setPosts(response.data);
        setSearchTitle("");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deletePost = () => {
    PostDataService.remove(currentPost.postId)
      .then(response => {
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">

      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <h4>Post List</h4>
        <Link to="/add" className="badge badge-warning">
          Add Post
        </Link>
        <ul className="list-group">
          {posts &&
            posts.map((post, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActivePost(post, index)}
                key={index}
              >
                {post.title}
              </li>
            ))}
        </ul>
      </div>


      <div className="col-md-6">
        {currentPost ? (
          <div>
            <h4>Post</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentPost.title}
            </div>
            <div>
              <label>
                <strong>Content:</strong>
              </label>{" "}
              {currentPost.content}
            </div>

            <Link
              to={"/post/" + currentPost.postId}
              className="badge badge-warning"
            >
              Edit
            </Link>

            <button className="badge badge-danger mr-2" onClick={deletePost}>
              Delete
            </button>

          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Post to see its details...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostList;