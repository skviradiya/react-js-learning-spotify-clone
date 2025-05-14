import CenterControls from "./CenterControls";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function PlayerBar() {
  return (
    <div className="relative flex gap-10 items-center p-5 justify-between bg-[#181818]">
      <LeftSide />
      <CenterControls />
      <RightSide />
    </div>
  );
}
