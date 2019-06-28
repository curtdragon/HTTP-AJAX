import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    return (
        <div className="friend-list-wrapper">
            {props.friends.map((friend) => (
                <Link to={`/friend/${friend.id}`} className="friend-card" key={friend.id}>
                    <h2>{friend.name}</h2>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </Link>
            ))}
        </div>
    )
}
