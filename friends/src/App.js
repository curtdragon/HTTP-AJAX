import React, {Component} from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import Friend from "./components/Friend";
import FriendList from "./components/FriendList";
import DeleteFriend from "./components/DeleteFriend";
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

  render(props) {
    const {friends} = this.state;
    return (
      <div className="App">
        <nav>
          <h1 className="title">Friends List</h1>
          <div className="nav-links">
            <NavLink to="/">Friends List</NavLink>
            <NavLink to="/new">New</NavLink>
            <NavLink to="/update">Update</NavLink>
            <NavLink to="/delete">Delete</NavLink>
          </div>
        </nav>

        <Route path="/" exact render={(props) => <FriendList {...props} friends={friends} />} />
        <Route path="/friend" exact render={(props) => <Friend {...props} friends={friends} />} />
        <Route path="/new" exact render={(props) => <NewFriend {...props} updateFriends={this.updateFriends} />} />
        <Route path="/update/id" render={(props) => <UpdateFriend {...props} updateFriends={this.updateFriends} />} />
        <Route path="/delete/id" render={(props) => <DeleteFriend {...props} updateFriends={this.updateFriends} />} />

      </div>
    );
  }
}