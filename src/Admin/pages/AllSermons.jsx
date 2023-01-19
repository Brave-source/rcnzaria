import React from "react";
import SermonList from "../Components/Sermon/SermonList";

import Card from "../Components/UI/Card";
import { SermonListHeader } from "../Components/Sermon/SermonListHeader";
import SermonFilter from "../Components/Sermon/SermonFilter";

const DUMMY_SERMON_DATA = [
  {
    id: "s1",
    title: "Revealing The Lord – (FOG) –",
    minister: "Apostle Arome Osayi",
    year: 2022,
    month: "January",
  },
  {
    id: "s2",
    title: "Prophetic Words & Declarative Prayer",
    minister: "Prophet Jangfa Jesse",
    year: 2022,
    month: "February",
  },
  {
    id: "s3",
    title: "Revealing The Lord – (FOG) –",
    minister: "Apostle Arome Osayi",
    year: 2022,
    month: "January",
  },
  {
    id: "s4",
    title: "Prophetic Words & Declarative Prayer",
    minister: "Prophet Jangfa Jesse",
    year: 2022,
    month: "February",
  },
  {
    id: "s5",
    title: "Revealing The Lord – (FOG) –",
    minister: "Apostle Arome Osayi",
    year: 2022,
    month: "January",
  },
  {
    id: "s6",
    title: "Prophetic Words & Declarative Prayer",
    minister: "Prophet Jangfa Jesse",
    year: 2022,
    month: "February",
  },
  {
    id: "s7",
    title: "Revealing The Lord – (FOG) –",
    minister: "Apostle Arome Osayi",
    year: 2022,
    month: "January",
  },
  {
    id: "s8",
    title: "Prophetic Words & Declarative Prayer",
    minister: "Prophet Jangfa Jesse",
    year: 2022,
    month: "May",
  },
  {
    id: "s9",
    title: "Revealing The Lord – (FOG) –",
    minister: "Apostle Arome Osayi",
    year: 2022,
    month: "January",
  },
  {
    id: "s10",
    title: "Prophetic Words & Declarative Prayer",
    minister: "Prophet Jangfa Jesse",
    year: 2022,
    month: "April",
  },
];

const AllSermons = () => {
  return (
    <Card>
      <div className="text-white bg-gray-800 p-3 grid gap-4">
        <SermonFilter />
        <SermonListHeader />
      </div>
      <SermonList data={DUMMY_SERMON_DATA} />
    </Card>
  );
};

export default AllSermons;
