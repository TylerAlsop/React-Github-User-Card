import React from 'react';
import FollowerCard from './follower-card'

const FollowerList = props => {

    return (
        <div className="follower-list">
            <FollowerCard followerInfo={props.followerInfo} />
        </div>
    );
};

export default FollowerList