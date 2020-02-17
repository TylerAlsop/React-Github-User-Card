import React from 'react';

const UserCard = props => {

    return (
        <div className="user-card">
            <img className="user-img" src={props.userInfo.avatar_url} alt="Users Picture or Avatar" />
            <h2 className="followers">{props.userInfo.name} currently has {props.userInfo.followers} followers.</h2>
            
        </div>
    );
};

export default UserCard
