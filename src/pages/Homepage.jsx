import React from 'react';
import Banner from '../layout/homepage/Banner';
import FriendList from '../layout/homepage/FriendList';

const Homepage = () => {
    return (
      <div className="max-w-285 mx-auto">
        <Banner />
        <FriendList />
      </div>
    );
};

export default Homepage;