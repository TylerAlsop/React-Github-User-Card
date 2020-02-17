import React from 'react';
import UserCard from "./user-card";

const User = props => {
    return (
        <div>
            <UserCard 
                key={props.userInfo.data.id}
                name={props.name}
                picture={props.picture}
                followers={props.userInfo.data.followers}
            />
        </div>
    )
}

export default User