import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { SermonList } from "../Sermons/SermonList";

const AllSermonsSection = () => {
  return (
    <section className="py-8">
      <div className="wrapper">
        <header className="sticky top-[75px] bg-white z-10 w-full shadow-md flex p-4 justify-between">
          <h1 className="text-2xl tracking-wider text-gray-900 font-bold">
            2022 Sermons
          </h1>
          <button className="flex btn btn-sm border-none rounded-none gap-2 bg-orange-500">
            View All
            <ArrowLongRightIcon className="w-5" />
          </button>
        </header>
        <main>
          <SermonList />
        </main>
      </div>
    </section>
  );
};

export default AllSermonsSection;
