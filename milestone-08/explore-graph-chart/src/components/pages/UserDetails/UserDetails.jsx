import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  //   const { uid } = useParams();
  const user = useLoaderData();

  //   destructuring info
  const {
    name,
    username,
    email,
    address: { city },
    phone,
    website,
  } = user;

  //   navigate use backpage
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto my-8 border p-6 rounded-lg shadow-md bg-white">
      <h2 className="text-3xl font-semibold text-teal-500">{name}</h2>
      <p className="text-gray-700">@{username}</p>
      <p className="text-gray-600 mt-2">{email}</p>
      <p className="text-gray-600">Location: {city}</p>
      <p className="text-gray-600">Phone: {phone}</p>
      <a
        href={`http://${website}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-teal-500 hover:underline"
      >
        Visit Website
      </a>

      <div className="text-right ">
        <button className="px-2.5 py-2 bg-gray-900 rounded-md font-semibold" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
