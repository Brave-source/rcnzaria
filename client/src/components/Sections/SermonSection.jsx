import { useEffect, useState} from "react"
import axios from 'axios'
import SermonCard from "../Sermons/SermonCard";
import EventsCard from "../Events/EventsCard";

const SermonSection = () => {
  const [sermon, setSermon] = useState([])

  useEffect(() => {
    const getSermon = async () => {
      try {
        const res = await axios.get("/sermons");
        setSermon(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getSermon();
  }, []);
  return (
    <section className="bg-white pb-12">
      <main className="wrapper p-4 relative h-full">
        <ul className="flex flex-col gap-6 sm:flex-row sm:w-[99%] lg:w-11/12 mx-auto -mt-8 sm:-mt-14">
          <EventsCard />
          {
            sermon.slice(0,1).map((item) => {
              return (
                <SermonCard
                key={item._id}
                date="Latest Sermon"
                minister={item.minister}
                sermonName={item.title}
                audioMessage={item.audioMessage}
  
                />
              )
            })
          }
        </ul>
      </main>
    </section>
  );
};

export default SermonSection;
