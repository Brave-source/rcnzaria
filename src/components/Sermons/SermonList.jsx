import React from "react";
import SermonCard from "./SermonCard";
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

export function SermonList() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-6">
      {DUMMY_SERMON_DATA.map((data, index) => {
        const num = Math.floor(Math.random() * 30 + 1);
        return (
          <SermonCard
            key={index}
            date={`${num}, May 2021`}
            minister={data.minister}
            sermonName={data.sermonName}
            audioMessage={data.audio}
          />
        );
      })}
    </ul>
  );
}
