import React from 'react';

const FollowerCard = props => {

    return (
        <div className="follower-card-container">
            {props.followerInfo.map(follower => (
                <div key={follower.id} className="follower-card">
                    <h2 className="followers-name">{follower.login}</h2>
                    <img className="follower-img" src={follower.avatar_url} alt="followers Picture or Avatar" />
                    
                </div>
            ))}
        </div>
    );
};

export default FollowerCard