import React from 'react';

const home = (handleLogOut) => {
    return (
        <div>
            <nav>
                <h3>Sanskrutik Mel</h3>
                <button onClick={handleLogOut}>Logout</button>
            </nav>
        </div>
    );
};

export default home;