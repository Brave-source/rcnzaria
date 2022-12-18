import {
  DocumentIcon,
  FolderOpenIcon,
  MusicalNoteIcon,
  ShareIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import SermonAudioPlay from "./SermonAudioPlay";

const SermonCard = ({ date, audioMessage, sermonName, minister }) => {
  return (
    <li className="w-full">
      <div className=" bg-white shadow-md px-4 py-5 flex flex-col gap-4 rounded-lg h-full sm:justify-between">
        <h1 className="uppercase text-2xl tracking-widest font-bold text-orange-500">
          {date}
        </h1>
        <h2 className=" text-gray-900 text-xl font-bold">{sermonName}</h2>
        <div className="flex gap-2 items-center">
          <div className="avatar">
            <div className="w-14 rounded-full">
              <img
                src="https://rcnsermons.org/wp-content/uploads/2020/05/Apostle-Arome-Osayi-365x365.png"
                alt="/"
              />
            </div>
          </div>
          <div>
            <p className="text-sm">
              Message from
              <span className="text-orange-500"> {minister}</span>
            </p>
            <div className="flex gap-2 mt-1">
              <p className="flex text-[0.7rem] items-center justify-between">
                <span>
                  <FolderOpenIcon className="w-3 text-orange-500" />
                </span>
                Posted in Audio Sermons
              </p>
              <p className="flex text-[0.7rem] items-center gap-1">
                <span>
                  <UserIcon className="w-3 text-orange-500" />
                </span>
                by RCN Media
              </p>
            </div>
          </div>
        </div>
        <div className=" flex gap-4 sm:gap-6 flex-wrap">
          <a href={audioMessage} download="true">
            <MusicalNoteIcon className="w-10 rounded bg-orange-100 text-orange-500 p-2 btn border-none  hover:text-orange-100 hover:bg-orange-500" />
          </a>
          <button className=" ">
            <VideoCameraIcon className="  w-10 rounded bg-orange-100 text-orange-500 p-2 btn border-none  hover:text-orange-100 hover:bg-orange-500" />
          </button>
          <button>
            <DocumentIcon className="w-10 rounded  bg-orange-100 text-orange-500 p-2 btn border-none  hover:text-orange-100 hover:bg-orange-500" />
          </button>
          <button>
            <ShareIcon className="w-10 rounded bg-orange-100 text-orange-500 p-2 btn border-none hover:text-orange-100 hover:bg-orange-500" />
          </button>
        </div>
        <SermonAudioPlay musicSrc={audioMessage} />
      </div>
    </li>
  );
};

export default SermonCard;
