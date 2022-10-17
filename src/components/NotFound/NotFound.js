import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Not Found</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/">
            <button className="btn btn-primary">Go to home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
