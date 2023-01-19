import React from "react";
import SermonItem from "./SermonItem";

const SermonList = ({ data }) => {
  return (
    <>
      <ul className="grid gap-y-3 p-3">
        {data.map((datum) => {
          return (
            <SermonItem
              key={datum.id}
              id={datum.id}
              title={datum.title}
              minister={datum.minister}
              year={datum.year}
              month={datum.month}
            />
          );
        })}
      </ul>
    </>
  );
};

export default SermonList;
