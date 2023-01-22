import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const DUMMY_YEARS = [2023, 2022, 2021, 2020, 2019, 2018, 2017];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentYear = new Date().getFullYear();
const Sermons = () => {
  const [year, setYear] = useState(currentYear);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    document.title = "Sermons";
    document.querySelector("html").scrollTop = 0;
    navigate(`/sermons?year=${year}`);
  }, [year, navigate]);

  return (
    <section>
      <div className="wrapper">
        <header className="sticky top-[75px] bg-white z-10 w-full shadow-md flex p-4 justify-between">
          <h1 className="text-2xl lg:text-3xl tracking-wider text-gray-900 font-bold">
            All sermons
          </h1>
          <div className="flex gap-3 items-center">
            <p>Filter by year:</p>
            <select
              name="year"
              id="year"
              value={year}
              onChange={(evt) => {
                setYear(evt.target.value);
              }}
            >
              {DUMMY_YEARS.map((year, index) => {
                return (
                  <option key={index} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
        </header>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 p-4 gap-x-2 gap-y-4">
          {MONTHS.map((month, index) => {
            return (
              <Link
                to={`/sermons/${month}/${year}`}
                key={index}
                className=" bg-white mx-auto shadow-md rounded-lg w-10/12 sm:w-full  h-48  flex flex-col items-center justify-evenly  text-orange-600 font-extrabold uppercase tracking-wider text-center"
              >
                <p className="text-3xl ">
                  {month} {searchParams.get("year")}
                </p>
                <p className="text-xl"> Sermons</p>
                <p className="text-sm capitalize font-normal">see all &gt;</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sermons;
