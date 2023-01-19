import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SermonList } from "../components/Sermons/SermonList";

const DUMMY_SERMON_DATA = [
  {
    sermonName: "Revealing The Lord – (FOG) –",
    minister: "Apostle Arome Osayi",
    audio:
      "https://rcnsermons.org/public_html/sermons/2020/FOG2020/01%20Revealing%20The%20Lord%20-%20%28FOG%29%20-%20%28Apostle%20Arome%20Osayi%29%20-%20%20Wed.%2018th%20Nov.%202020.mp3.mp3",
  },
  {
    sermonName: "Prophetic Words & Declarative Prayer",
    minister: "Prophet Jangfa Jesse",
    audio:
      "https://rcnsermons.org/public_html/sermons/2020/FOG2020/03%20Prophetic%20Words%20%26%20Declarative%20Prayer%20-%20%28Prophet%20Jangfa%20Jesse%29%20-%20Wed.%2018th%20Nov.%202020.mp3",
  },
  {
    sermonName: "The Essentials Of Ministry (Part 1)",
    minister: "Apst. Arome Osayi",
    audio:
      "https://rcnsermons.org/public_html/sermons/2020/FOG2020/04%20The%20Essentials%20Of%20Ministry%20%28Part%201%29%20-%20%28Apst.%20Arome%20Osayi%29%20-%20Thur.%20%28Morn%29%2019th%20Nov.%202020.mp3",
  },
  {
    sermonName: "The Essentials Of Ministry (Part 2)",
    minister: "Apst. Arome Osayi",
    audio:
      "https://rcnsermons.org/public_html/sermons/2020/FOG2020/07%20The%20Essentials%20Of%20Ministry%20%28Part2%29%20-%20%28Apst.%20Arome%20Osayi%29%20-%20Fri.%20%28Morn%29%20-%2020th%20Nov.%202020.mp3",
  },
  {
    sermonName: "The Gifts Of Healing",
    minister: "Apst. Arome Osayi",
    audio:
      "https://rcnsermons.org/public_html/sermons/2020/04%20April%202020%20-%20THE%20POWER%20OF%20PRAYER/01%20ONLINE%20HEALING%20SERVICE%20-%20The%20Gifts%20Of%20Healing%20-%20%28Apst.%20Arome%20Osayi%29%20-%20Sun.%2026th%20April%202020.mp3",
  },
  {
    sermonName: "The Holy Ghost ",
    minister: "Apt. Gideon Odoma",
    audio:
      "https://rcnsermons.org/public_html/sermons/2020/FOG2020/18%20The%20Holy%20Ghost%20-%20%28Apt.%20Gideon%20Odoma%29%20-%20Fri.%20%28Evening%29%20-%2020th%20%20Nov.%202020~1.mp3",
  },
];

const SermonDetails = () => {
  const { year, month } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelector("html").scrollTop = 0;
    document.title = "Sermons";
  }, []);

  return (
    <section>
      <div className="wrapper">
        <header className="flex gap-3 md:gap-10 items-center p-4 sticky top-[75px] bg-white z-10 w-full shadow-md">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="bg-orange-500 rounded-xl px-4"
          >
            <ArrowLongLeftIcon className=" text-white h-10" />
          </button>
          <h1 className="text-2xl md:text-3xl tracking-wide font-semibold">
            {month}, {year} sermons
          </h1>
        </header>
        <SermonList sermons={DUMMY_SERMON_DATA} />
      </div>
    </section>
  );
};

export default SermonDetails;
