import React from 'react';

const User = props => {

    return (
        <div className="user-card">
            <p className="user-name">{props.user.name}</p>
            <p>{props.user.followers}</p>
        </div>
    );
};

export default User