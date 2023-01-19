import React, { useEffect } from "react";
import { SermonList } from "../components/Sermons/SermonList";

const Sermons = () => {
  useEffect(() => {
    document.title = "Sermons";
  }, []);

  return (
    <section>
      <div className="wrapper">
        <div className="h-full flex gap-5 items-center justify-center flex-col p-5 w-full">
          {/* <h1 className="font-bold tracking-widest text-4xl text-center">
            
          </h1>
          <p>Check again later</p> */}
          <SermonList />
        </div>
      </div>
    </section>
  );
};

export default Sermons;
