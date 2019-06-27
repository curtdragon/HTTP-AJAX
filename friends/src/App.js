import React, {Component} from "react";
import axios from "axios";
import { Route, NavLink, Link } from "react-router-dom";
import DeleteFriend from "./components/DeleteFriend";
import Friend from "./components/Friend";
import FriendList from "./components/FriendList";
import NewFriend from "./components/NewFriend";
import UpdateFriend from "./components/UpdateFriend";

export default class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
        .then(response => {
          this.setState({
            friends: response.data
          })
        })
        .catch(err=> {
          console.log("Error: ",err);
        })
  }

  updateFriends = (friends) => {
    this.setState({friends});
  }

  render() {
    const {friends} = this.state;
    return (
      <div className="App">
        <nav>
          <h1 className="title">Friends List</h1>
          <div className="nav-links">
            <NavLink to="/new">New</NavLink>
            <NavLink to="/update">Update</NavLink>
            <NavLink to="/delete">Delete</NavLink>
            <NavLink to="/">Home</NavLink>
          </div>
        </nav>

        <Route path="/new" exact render={(props) => <NewFriend {...props} updateFriends={this.updateFriends} />} />
        <Route path="/update" exact render={(props) => <UpdateFriend {...props} friends={friends} />} />
        <Route path="/delete" exact render={(props) => <DeleteFriend {...props} updateFriends={this.updateFriends} />} />
        <Route path="/" exact render={(props) => <FriendList {...props} friends={friends} />} />

      </div>
    );
  }
}