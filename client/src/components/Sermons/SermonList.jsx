import React from "react";
import Dayjs from "dayjs";
import SermonCard from "./SermonCard";

export function SermonList({ sermons, all }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-6">
      { all 
        ? sermons.map((data, index) => {
          const day = new Date(data.createdAt).getDay();
          const num = new Date(data.createdAt).toDateString();
          const year = new Date(data.createdAt).getFullYear();
          const month = num.substring(4,8);
          return (
            <SermonCard
              key={index}
              date={`${day} ${month} ${year}`}
              minister={data.minister}
              sermonName={data.title}
              audioMessage={data.audioMessage}
              img = {data.img}
            />
          );}) 
        :
        sermons.slice(0,6).map((data, index) => {
          const day = new Date(data.createdAt).getDay();
          const num = new Date(data.createdAt).toDateString();
          const year = new Date(data.createdAt).getFullYear();
          const month = num.substring(4,8);
          return (
            <SermonCard
              key={index}
              date={`${day} ${month} ${year}`}
              minister={data.minister}
              sermonName={data.title}
              audioMessage={data.audioMessage}
            />
        );})
    }
    </ul>
  );
}
