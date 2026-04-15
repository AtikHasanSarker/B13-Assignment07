import React, { useContext } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router';
import { TimelineContext } from '../context/ContextProvider';
import { toast } from 'react-toastify';
import { FiPhoneCall } from 'react-icons/fi';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { VscArchive } from 'react-icons/vsc';
import { GridLoader } from 'react-spinners';

const FriendDetails = () => {
  const navigation = useNavigation();
  
    const {id} = useParams();
    const friends = useLoaderData()
    const expectedFriend = friends.find((friend) => friend.id == id);

    const {
      picture,
      name,
      email,
      goal,
      tags,
      bio,
      next_due_date,
      days_since_contact,
      status,
    } = expectedFriend;

    const { timeline, setTimeline } = useContext(TimelineContext);
    const handleAction = (action) => {
      const info = {
        name,
        action,
      };
      setTimeline([...timeline, info])
      toast.success(`${action} with ${name}`, {
        position: "top-center",
        autoClose: 2000,
      });
    };
    return (
      <div>
        <div className="bg-gray-100 py-20">
          {navigation.state === "loading" && (
            <div className="flex justify-center my-10">
              <GridLoader className="text-3xl" color="#980ffa" />
            </div>
          )}
          <div className="max-w-5xl mx-auto grid grid-cols-12 gap-4">
            <div className="col-span-4 space-y-3">
              <div className="bg-white rounded-xl shadow p-6 text-center">
                <img
                  src={picture}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
                />
                <h2 className="font-semibold text-xl text-gray-800 mb-2">
                  {name}
                </h2>

                <div
                  className={`mx-auto text-xs px-3 font-semibold py-1.5 rounded-full w-fit text-white ${status == "overdue" ? "bg-red-500" : status == "almost due" ? "bg-amber-500" : "bg-success-content"}`}
                >
                  {status.toUpperCase()}
                </div>

                <div className="flex justify-center gap-2 mt-2">
                  {tags.map((tag) => (
                    <span className="text-xs font-semibold bg-green-100 text-success-content px-3 py-1.5 rounded-full">
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </div>

                <p className="font-semibold text-gray-500 my-2 italic">
                  "{bio}"
                </p>

                <p className="text-sm font-semibold text-gray-500">
                  Email: {email}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-4 flex justify-center font-semibold items-center gap-2 cursor-pointer hover:bg-gray-50">
                <RiNotificationSnoozeLine /> <span>Snooze 2 Weeks</span>
              </div>

              <div className="bg-white rounded-lg shadow p-4 flex justify-center font-semibold items-center gap-2 cursor-pointer hover:bg-gray-50">
                <VscArchive /> <span>Archive</span>
              </div>

              <div className="bg-white rounded-lg shadow p-4 flex justify-center text-red-500 font-semibold items-center gap-2 cursor-pointer hover:bg-red-50">
                <RiDeleteBin6Line /> <span>Delete</span>
              </div>
            </div>

            <div className="col-span-8 space-y-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow py-8 px-4 text-center">
                  <h2 className="text-3xl font-bold text-success-content mb-2">
                    {days_since_contact}
                  </h2>
                  <p className="text-gray-500">Days Since Contact</p>
                </div>

                <div className="bg-white rounded-xl shadow py-8 px-4 text-center">
                  <h2 className="text-3xl font-bold text-success-content mb-2">
                    {goal}
                  </h2>
                  <p className="text-gray-500">Goal (Days)</p>
                </div>

                <div className="bg-white rounded-xl shadow py-8 px-4 text-center">
                  <h2 className="text-3xl font-semibold text-success-content mb-2">
                    {next_due_date}
                  </h2>
                  <p className="text-gray-500">Next Due</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-xl text-success-content mb-4">
                    Relationship Goal
                  </h3>
                  <button className="text-sm font-medium btn px-4 py-2 rounded-md hover:bg-gray-50">
                    Edit
                  </button>
                </div>
                <p className="text-lg text-gray-500">
                  Connect every
                  <span className="font-bold text-gray-900"> {goal} days</span>
                </p>
              </div>

              <div className="bg-white rounded-xl shadow p-5">
                <h3 className="font-semibold text-xl text-success-content mb-4">
                  Quick Check-In
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={() => handleAction("Call")}
                    className="border border-gray-300 rounded-2xl p-4 flex flex-col items-center hover:bg-gray-100 hover:cursor-pointer"
                  >
                    <FiPhoneCall className="text-4xl mb-2" />
                    <span className="text-sm mt-2">Call</span>
                  </button>

                  <button
                    onClick={() => handleAction("Text")}
                    className="border border-gray-300 rounded-2xl p-4 flex flex-col items-center hover:bg-gray-100 hover:cursor-pointer"
                  >
                    <BiMessageRoundedDots className="text-4xl mb-2" />
                    <span className="text-sm mt-2">Text</span>
                  </button>

                  <button
                    onClick={() => handleAction("Video")}
                    className="border border-gray-300 rounded-2xl p-4 flex flex-col items-center hover:bg-gray-100 hover:cursor-pointer"
                  >
                    <GoDeviceCameraVideo className="text-4xl mb-2" />
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