import React, { useEffect } from "react";

const Registration = () => {
  useEffect(() => {
    document.title = "E-church Registration";
  }, []);

  return (
    <section>
      <div className="wrapper">
        <div className="h-full flex gap-5 items-center justify-center flex-col p-5 w-full">
          <h1 className="font-bold tracking-widest text-4xl text-center">
            404! Page not found
          </h1>
          <p>Wrong credentials</p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
