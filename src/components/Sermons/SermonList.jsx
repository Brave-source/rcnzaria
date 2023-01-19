import React from "react";
import SermonCard from "./SermonCard";

export function SermonList({ sermons }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-6">
      {sermons.map((sermon, index) => {
        const num = Math.floor(Math.random() * 30 + 1);
        return (
          <SermonCard
            key={index}
            date={`${num}, May 2021`}
            minister={sermon.minister}
            sermonName={sermon.sermonName}
            audioMessage={sermon.audio}
          />
        );
      })}
    </ul>
  );
}
