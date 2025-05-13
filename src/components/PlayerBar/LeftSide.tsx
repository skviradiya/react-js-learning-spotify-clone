import { downArrowIcon, heartFillIcon, heartIcon } from "@src/assets";
import { useState } from "react";

export default function LeftSide() {
  const [isLiked, setIsLiked] = useState(false);
  const [isPosterView, setIsPosterView] = useState(false);
  const togglePoster = () => setIsPosterView((prev) => !prev);
  return (
    <div className="flex flex-1 gap-5 overflow-hidden">
      {isPosterView && (
        <div className="absolute left-0 bottom-[100%] w-[310px] overflow-hidden aspect-square object-cover bg-amber-50">
          <img src="https://picsum.photos/200/300" className="w-full" />
          <img
            src={downArrowIcon}
            className="absolute top-5 right-5"
            onClick={togglePoster}
          />
        </div>
      )}

      <div className="flex items-center gap-5">
        <div className="h-20" onClick={togglePoster}>
          {!isPosterView && (
            <img
              src="https://picsum.photos/200/300"
              className="min-w-20 h-20 object-cover"
            />
          )}
        </div>
        <div>
          <h1 className="text-sm line-clamp-1">Ocean Front Apt.</h1>
          <p className="text-xs text-[#B3B3B3]">ayokay</p>
        </div>
      </div>
      <img
        src={isLiked ? heartFillIcon : heartIcon}
        onClick={() => setIsLiked(!isLiked)}
      />
    </div>
  );
}
