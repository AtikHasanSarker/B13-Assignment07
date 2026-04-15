import React from 'react';
import Banner from '../layout/homepage/Banner';
import FriendList from '../layout/homepage/FriendList';

const Homepage = () => {
    return (
      <div className="bg-gray-100">
        <div className="max-w-285 mx-auto px-5">
          <Banner />
          <FriendList />
        </div>
      </div>
    );
};

export default Homepage;