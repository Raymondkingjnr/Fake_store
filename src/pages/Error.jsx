import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <main className="grid place-items-center px-8 min-h-[100vh]">
        <div className="text-center">
          <p className="font-bold text-9xl text-primary">404</p>
          <h1 className="font-bold text-3xl mt-4 leading-3 tracking-normal">
            page not found
          </h1>
          <div className="mt-10">
            <Link to={"/"} className="btn btn-primary">
              go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return <div>Error</div>;
};

export default Error;
