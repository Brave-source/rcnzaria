import React from "react";
import SermonCard from "../Sermons/SermonCard";
import EventsCard from "../Events/EventsCard";

const SermonSection = () => {
  return (
    <section className="bg-white pb-12">
      <main className="wrapper p-4 relative h-full">
        <ul className="flex flex-col gap-6 sm:flex-row md:w-11/12 mx-auto -mt-8 sm:-mt-14">
          <EventsCard />
          <SermonCard
            date="Latest Sermon"
            minister="Apt. Arome Osayi"
            sermonName="Ordained Kingdom Realities "
            audioMessage="https://rcnsermons.org/2021%20updload/02%20Febuary%202021%20-%20The%20Gospel%20Of%20The%20Kingdom%20II/04%20Ordained%20Kingdom%20Realities%20-%20%28Apt.%20Arome%20Osayi%29%20-%20Sun.%2028th%20Feb.%202021.mp3"
          />
        </ul>
      </main>
    </section>
  );
};

export default SermonSection;
