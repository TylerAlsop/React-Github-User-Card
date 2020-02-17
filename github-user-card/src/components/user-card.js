import React from 'react';

const UserCard = props => {

    return (
        <div className="user-card">
            <img src={props.userInfo.data.avatar_url} alt="Users Picture or Avatar" />
            <p className="user-name">{props.userInfo.data.name}</p>
            <p>{props.userInfo.data.followers}</p>
        </div>
    );
};

export default UserCard
