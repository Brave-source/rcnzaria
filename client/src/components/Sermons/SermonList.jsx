import React from "react";
import SermonCard from "./SermonCard";

export function SermonList({ sermons, all }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-6">
      { all 
        ? sermons.map((data, index) => {
          const num = new Date(data.createdAt).toDateString();
          const year = new Date(data.createdAt).getFullYear();
          const month = num.substring(4,8);
          const day = num.substring(8,10);
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
          const num = new Date(data.createdAt).toDateString();
          const year = new Date(data.createdAt).getFullYear();
          const month = num.substring(4,8);
          const day = num.substring(8,10);
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
