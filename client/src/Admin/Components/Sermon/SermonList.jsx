import React from "react";
import SermonItem from "./SermonItem";

const SermonList = ({ data }) => {
  
  return (
    <>
      <ul className="grid gap-y-3 p-3">
        {data.map((datum, index) => {
          const year = new Date(data[index].createdAt).getFullYear();
          const month = data[index].createdAt.substring(5,7);
          return (
            <SermonItem
              key={datum._id}
              id={datum._id}
              title={datum.title}
              minister={datum.minister}
              year={year}
              month={month}
            />
          );
        })}
      </ul>
    </>
  );
};

export default SermonList;
