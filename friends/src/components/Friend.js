import React from "react";
import { Route, NavLink, Link } from "react-router-dom";
// import axios from "axios";

export default function (props) {
    const friend = props.friends.find(i => String(i.id) === props.match.params.id)
    if (!friend) {
        return <div>Loading...</div>
    }
    return(
        <div className="friend-wrapper">
            <div className="friend-header">

            </div>
        </div>
    )

}