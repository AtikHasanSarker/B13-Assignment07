import React from 'react';
import { NavLink } from 'react-router';

const FriendCard = ({ friend }) => {
  
  const { id, name, picture, status, tags, days_since_contact } = friend;
  return (
    <NavLink to={`/friend/${id}`}>
      <div className="bg-white rounded-xl border border-gray-200 shadow-md p-5 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition duration-300">
        <img
          src={picture}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mb-3"
          loading="lazy"
        />

        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

        <p className="text-sm text-gray-400 mb-2">{days_since_contact}d ago</p>

        <span className="text-xs font-semibold bg-green-100 text-success-content px-3 py-1 rounded-full mb-2">
          {tags[0].toUpperCase()}
        </span>

        <span
          className={`mx-auto text-xs px-3 font-semibold py-1.5 rounded-full w-fit text-white ${status == "overdue" ? "bg-red-500" : status == "almost due" ? "bg-amber-500" : "bg-success-content"}`}
        >
          {status.toUpperCase()}
        </span>
      </div>
    </NavLink>
  );
};

export default FriendCard;