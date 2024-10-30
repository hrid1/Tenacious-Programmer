import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center ">
      <h1 className="text-5xl font-bold text-center text-white leading-snug">
        {" "}
        0pps <br /> 
        {error.statusText || error.message}!
      </h1>
      <Link to='/' className="btn py-2 px-3 bg-blue-900 rounded-md">Back To Home</Link>
    </div>
  );
};

export default NotFound;
