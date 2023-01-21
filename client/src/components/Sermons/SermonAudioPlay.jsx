import {
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { audioRefContext } from "../../store/context/audio-ref";
import { audioActions, audioURl } from "../../store/slices/audio-slice";

function convertToTimeString(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const timeString =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    remainingSeconds.toString().padStart(2, "0");

  return timeString;
}

const SermonAudioPlay = ({ musicSrc }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { audioRef: audioElem, playTimeData } = useContext(audioRefContext);
  const [percentagePlayed, setPercentagePlayed] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const dispatch = useDispatch();
  const currentAudioURL = useSelector(audioURl);

  useEffect(() => {
    const formattedCurrentTime = convertToTimeString(
      Math.floor(playTimeData.currentTime || 0)
    );
    const formattedDuration = convertToTimeString(
      Math.floor(playTimeData.duration || 0)
    );
    if (currentAudioURL !== musicSrc) {
      setPercentagePlayed(0);
      setIsPlaying(false);
      setCurrentTime(0);
      setAudioDuration(0);
    } else {
      setPercentagePlayed(playTimeData.percentagePlayed || 0);
      setCurrentTime(formattedCurrentTime);
      setAudioDuration(formattedDuration);
    }
  }, [currentAudioURL, musicSrc, playTimeData, isPlaying]);

  const muteHandler = () => {
    if (currentAudioURL !== musicSrc) {
      return;
    }
    if (isMuted) {
      audioElem.current.muted = false;
    } else {
      audioElem.current.muted = true;
    }

    setIsMuted((prevState) => !prevState);
  };

  const playAndPauseHandler = () => {
    dispatch(audioActions.setAudioURL(musicSrc));
    setTimeout(() => {
      if (isPlaying) {
        audioElem.current.pause();
        setIsPlaying(false);
      } else {
        audioElem.current.play();
        setIsPlaying(true);
      }
    }, 50);
  };
  const updateAudioPlayTimeHandler = (evt) => {
    if (currentAudioURL === musicSrc) {
      audioElem.current.currentTime =
        (evt.target.value / 100) * playTimeData.duration;

      setPercentagePlayed(evt.target.value);
    }
  };

  return (
    <div className="bg-gray-100 shadow-md pb-1  mt-6 rounded-lg px-3 relative flex h-24 items-end">
      <button
        onClick={playAndPauseHandler}
        className="btn btn-circle btn-md border-none flex items-center justify-center bg-orange-500 text-white absolute -top-5 "
      >
        {isPlaying ? (
          <PauseIcon className="w-6" />
        ) : (
          <PlayIcon className="w-6" />
        )}
      </button>
      <div className="grid grid-cols-12 w-full gap-2 items-center">
        <div className="col-span-10">
          <p className="text-gray-600 text-sm flex justify-between flex-wrap">
            <span>{`${currentTime} / ${audioDuration}`}</span>
            {(+percentagePlayed).toFixed(1)}% played
          </p>
          <input
            type="range"
            min="0"
            max="100"
            value={+percentagePlayed || 0}
            className="range range-ss range-primary"
            onChange={updateAudioPlayTimeHandler}
          />
        </div>
        <div className="col-span-2 relative place-self-center">
          <button
            onClick={muteHandler}
            className="btn btn-circle border-none bg-orange-200 text-gray-700 btn-sm hover:bg-orange-500 hover:text-orange-100 z-10 "
          >
            {isMuted ? (
              <SpeakerXMarkIcon className="w-5" />
            ) : (
              <SpeakerWaveIcon className="w-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SermonAudioPlay;
