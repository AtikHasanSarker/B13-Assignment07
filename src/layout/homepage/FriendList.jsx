import React from 'react';
import FriendCard from './FriendCard';
import { useLoaderData, useNavigation } from 'react-router';
import { GridLoader } from 'react-spinners';

const FriendList = () => {
  const navigation = useNavigation();
    const friends = useLoaderData()
    return (
      <div>
        {navigation.state === "loading" && (
          <div className="flex justify-center my-10">
            <GridLoader className="text-3xl" color="#004d39" />
          </div>
        )}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="px-8 py-12 rounded-2xl bg-white border border-gray-200">
              <h4 className="font-semibold text-3xl">{friends.length}</h4>
              <p className="text-[#64748B]">Total Friends</p>
            </div>
            <div className="px-8 py-12 rounded-2xl bg-white border border-gray-200">
              <h4 className="font-semibold text-3xl">3</h4>
              <p className="text-[#64748B]">On Track</p>
            </div>
            <div className="px-8 py-12 rounded-2xl bg-white border border-gray-200">
              <h4 className="font-semibold text-3xl">6</h4>
              <p className="text-[#64748B]">Need Attention</p>
            </div>
            <div className="px-8 py-12 rounded-2xl bg-white border border-gray-200">
              <h4 className="font-semibold text-3xl">12</h4>
              <p className="text-[#64748B]">Interactions This Month</p>
            </div>
          </div>
          <hr className="my-10 border-gray-200" />
          <div>
            <h3 className="font-semibold text-2xl mb-4">Your Friends</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
              {friends.map((friend) => (
                <FriendCard key={friend.id} friend={friend} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default FriendList;