import React from 'react';

const Home = (handleLogOut) => {
    return (
        <div>
            <nav>
                <h2>Sanskrutik Mel</h2>
                <button onClick={handleLogOut} >LogOut</button>
            </nav>
        </div>
    );
};

export default Home;

