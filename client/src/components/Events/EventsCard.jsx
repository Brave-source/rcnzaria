import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React from "react";

const EventsCard = () => {
  return (
    <li className="w-full">
      <div className=" bg-white shadow-md px-4 py-5 flex flex-col gap-4 sm:justify-between rounded-lg sm:h-full">
        <h1 className="uppercase text-2xl tracking-widest font-bold text-orange-500">
          Next event
        </h1>
        <h2 className=" text-gray-900 text-xl font-bold">
          Which is the same as saying
        </h2>
        <p className="text-gray-500 text-sm leading-6">
          You need to be sure there isn't anything embarrassing hidden in the
          middle of text. All the Lorem Ipsum generators on the Internet
        </p>
        <div className=" flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className=" bg-orange-200 w-fit px-4 py-2">
            <h4 className=" flex flex-col text-center text-gray-600 font-medium">
              <span className="text-4xl font-semibold">30</span> JUN'21
            </h4>
          </div>
          <div className=" flex flex-col gap-3 sm:self-center">
            <p className="flex gap-3 items-center text-sm leading-6">
              <span aria-hidden>
                <ClockIcon className="w-6 text-orange-500" />
              </span>
              Sunday(7:00am-9:00am)
            </p>
            <p className="flex gap-3 capitalize items-center text-sm leading-6">
              <span aria-hidden>
                <MapPinIcon className="w-6 text-orange-500" />
              </span>
              4873 pretty view lane new york, 47
            </p>
          </div>
        </div>
        <button className="btn border-none rounded-none bg-orange-500  text-white w-auto self-start px-3 py-2 hover:scale-110 delay-100">
          Join now
        </button>
      </div>
    </li>
  );
};

export default EventsCard;
