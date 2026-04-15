import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { TimelineContext } from '../context/ContextProvider';

const FriendDetails = () => {
  
    const {id} = useParams();
    const friends = useLoaderData()
    const expectedFriend = friends.find((friend) => friend.id == id);

    const {picture, name,email, goal, tags, bio, next_due_date, days_since_contact} = expectedFriend;

    const { timeline, setTimeline } = useContext(TimelineContext);
    const handleAction = (action) => {
      const info = {
        name,
        action,
      };
      setTimeline([...timeline, info])
    };
    return (
      <div>
        <div className="bg-gray-100 min-h-screen p-6">
          <div className="max-w-5xl mx-auto grid grid-cols-12 gap-4">
            {/* LEFT PROFILE CARD */}
            <div className="col-span-4 space-y-3">
              <div className="bg-white rounded-xl shadow p-5 text-center">
                <img
                  src={picture}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
                />
                <h2 className="font-semibold text-gray-800">{name}</h2>

                <div className="flex justify-center gap-2 mt-2">
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                    {tags[0]}
                  </span>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    {tags[1]}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mt-3 italic">{bio}</p>

                <p className="text-xs text-gray-400 mt-1">Email: {email}</p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="bg-white rounded-lg shadow p-3 flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                ⏰ <span className="text-sm text-gray-700">Snooze 2 Weeks</span>
              </div>

              <div className="bg-white rounded-lg shadow p-3 flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                📁 <span className="text-sm text-gray-700">Archive</span>
              </div>

              <div className="bg-white rounded-lg shadow p-3 flex items-center gap-2 cursor-pointer hover:bg-red-50">
                🗑️ <span className="text-sm text-red-500">Delete</span>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-span-8 space-y-4">
              {/* TOP STATS */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl shadow p-5 text-center">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {days_since_contact}
                  </h2>
                  <p className="text-sm text-gray-500">Days Since Contact</p>
                </div>

                <div className="bg-white rounded-xl shadow p-5 text-center">
                  <h2 className="text-2xl font-bold text-gray-800">{goal}</h2>
                  <p className="text-sm text-gray-500">Goal (Days)</p>
                </div>

                <div className="bg-white rounded-xl shadow p-5 text-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {next_due_date}
                  </h2>
                  <p className="text-sm text-gray-500">Next Due</p>
                </div>
              </div>

              {/* RELATIONSHIP GOAL */}
              <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Relationship Goal
                  </h3>
                  <p className="text-sm text-gray-500">
                    Connect every{" "}
                    <span className="font-semibold text-gray-700">30 days</span>
                  </p>
                </div>

                <button className="text-sm border px-3 py-1 rounded-md hover:bg-gray-50">
                  Edit
                </button>
              </div>

              {/* QUICK CHECK-IN */}
              <div className="bg-white rounded-xl shadow p-5">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Quick Check-In
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={() => handleAction("Call")}
                    className="border rounded-lg p-4 flex flex-col items-center hover:bg-gray-50"
                  >
                    📞
                    <span className="text-sm mt-2">Call</span>
                  </button>

                  <button
                    onClick={() => handleAction("Text")}
                    className="border rounded-lg p-4 flex flex-col items-center hover:bg-gray-50"
                  >
                    💬
                    <span className="text-sm mt-2">Text</span>
                  </button>

                  <button
                    onClick={() => handleAction("Video")}
                    className="border rounded-lg p-4 flex flex-col items-center hover:bg-gray-50"
                  >
                    🎥
                    <span className="text-sm mt-2">Video</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FriendDetails;