import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import PostList from "./components/PostList";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-brand">
          <Link to={"/"}> UMS </Link>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/"]} component={PostList} />
            <Route path="/add" component={AddPost} />
            <Route path="/post/:id" component={EditPost} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
