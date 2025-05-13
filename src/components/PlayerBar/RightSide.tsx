import { devicesIcon, queueIcon, volumeIcon } from "@src/assets";

export default function RightSide() {
  return (
    <div className="flex flex-1 justify-end items-center">
      <img src={queueIcon} />
      <img src={devicesIcon} />
      <img src={volumeIcon} />
      <div className="flex w-[40%] h-1 bg-gray-500 rounded">
        <div className="h-full bg-white w-[56%] rounded" />
      </div>
    </div>
  );
}
