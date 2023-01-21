import React, { useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { audioRefContext } from "../../store/context/audio-ref";
import { audioURl } from "../../store/slices/audio-slice";

const Audio = () => {
  const audioRef = useRef();
  const audioSource = useSelector(audioURl);
  const { createAudioRef, playTimeFN } = useContext(audioRefContext);

  useEffect(() => {
    createAudioRef(audioRef);
  }, [createAudioRef]);

  const onPlaying = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const percentagePlayed = (currentTime / duration) * 100;

    playTimeFN({ currentTime, duration, percentagePlayed });
  };

  return (
    <audio
      src={audioSource}
      type="audio/mpeg"
      ref={audioRef}
      onTimeUpdate={onPlaying}
    >
      Your browser doesn't support this.
    </audio>
  );
};
export default Audio;
