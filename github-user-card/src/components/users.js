import React from 'react';
import UserCard from "./user-card";

const Users = props => {
    return (
        <div>
            <UserCard key={props.user.id} />
        </div>
    )
}

export default Users