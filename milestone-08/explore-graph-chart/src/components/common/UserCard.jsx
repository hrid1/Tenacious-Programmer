import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const { id, name, email, address } = user;

  return (
    <div className="border p-6 rounded-lg shadow-lg text-center bg-white">
      <h2 className="text-2xl font-semibold text-teal-500">{name}</h2>
      <h3 className="text-lg text-gray-700">From: {address?.city}</h3>
      <p className="text-gray-600">{email}</p>

      <Link
        to={`/user/${id}`}
        className="mt-4 inline-block px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
      >
        View Details
      </Link>
    </div>
  );
};

export default UserCard;
