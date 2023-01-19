import React from "react";

// TODO: this component should get all the years in the database into an array in other to map it into the year filter.
const DUMMY_YEARS = [2023, 2022, 2021, 2020, 2019, 2018, 2017];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const SermonFilter = () => {
  return (
    <div className="flex gap-4">
      <p>Filter by</p>
      <div className="flex items-center">
        <p>Year:</p>
        <select name="Year" id="Year" className="bg-gray-800 text-white">
          {DUMMY_YEARS.map((year, index) => {
            return (
              <option key={index} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex">
        <p>Month:</p>
        <select name="Month" id="Month" className="bg-gray-800 text-white">
          {MONTHS.map((month, index) => {
            return (
              <option key={index} value={month}>
                {month}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SermonFilter;
