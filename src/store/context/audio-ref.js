import { createContext, useCallback, useState } from "react";

export const audioRefContext = createContext({
  audioRef: null,
  createAudioRef: () => {},
});

export const AudioContextProvider = ({ children }) => {
  const [audioRef, setAudioRef] = useState(null);
  const [playTime, setPlayTime] = useState({
    duration: 0,
    currentTime: 0,
    percentagePlayed: 0,
  });

  const createAudioInstance = useCallback((audioRef) => {
    setAudioRef(audioRef);
  }, []);

  const playTimeUpdateHandler = (data) => {
    setPlayTime({
      currentTime: data.currentTime,
      duration: data.duration,
      percentagePlayed: data.percentagePlayed,
    });
  };
  return (
    <audioRefContext.Provider
      value={{
        audioRef,
        createAudioRef: createAudioInstance,
        playTimeFN: playTimeUpdateHandler,
        playTimeData: playTime,
      }}
    >
      {children}
    </audioRefContext.Provider>
  );
};
