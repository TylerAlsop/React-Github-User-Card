import React from 'react';

const UserCard = props => {

    return (
        <div className="user-card">
            <img src={props.userInfo.avatar_url} alt="Users Picture or Avatar" />
            <div className="name-and-followers">
                <h1 className="user-name">{props.userInfo.name}</h1>
                <h2>Number of Followers: {props.userInfo.followers}</h2>
            </div>
            
        </div>
    );
};

export default UserCard
