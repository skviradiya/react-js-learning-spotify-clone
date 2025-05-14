import {
  nextIcon,
  pauseIcon,
  playIcon,
  prevIcon,
  repeatIcon,
  shuffleIcon,
} from "@src/assets";
import { useEffect, useRef, useState } from "react";

export default function CenterControls() {
  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}`;
  };
  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlay(!isPlay);
  };
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    // Event listener for spacebar to toggle play/pause
    const handleSpaceBarPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault(); // Prevents the default spacebar action (scrolling the page)
        togglePlayPause();
      }
    };

    // Add keydown event listener
    window.addEventListener("keydown", handleSpaceBarPress);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
      window.removeEventListener("keydown", handleSpaceBarPress); // Clean up the event listener
    };
  }, [isPlay]);

  return (
    <div className="flex flex-1 flex-col justify-center">
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />

      <div className="flex justify-center gap-6">
        <img src={shuffleIcon} className="hover:scale-[1.1]" />
        <img src={prevIcon} className="hover:scale-[1.1]" />
        <img
          src={isPlay ? pauseIcon : playIcon}
          onClick={togglePlayPause}
          className="hover:scale-[1.1]"
        />
        <img src={nextIcon} className="hover:scale-[1.1]" />
        <img src={repeatIcon} className="hover:scale-[1.1]" />
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-xs text-gray-500">{formatTime(currentTime)}</span>
        <div className="w-full h-1 bg-gray-500 rounded">
          <div
            className="h-full bg-white rounded"
            style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
          />
        </div>

        <span className="text-xs text-gray-500">{formatTime(duration)}</span>
      </div>
    </div>
  );
}
