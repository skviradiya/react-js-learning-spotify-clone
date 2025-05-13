import { homeHederLogoImage } from "@src/assets";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 flex gap-10 z-1 items-center justify-between bg-[#181818]">
      <div className="flex gap-5 items-center">
        <img src={homeHederLogoImage} width={50} height={50} />
        <div className="text-4xl max-sm:text-2xl font-bold">Spotify</div>
      </div>
      <div className="flex max-sm:flex-col gap-5">
        <Button onClick={() => navigate("/signup")}>Sign Up</Button>
        <Button className="bg-white " onClick={() => navigate("/login")}>
          <h1 className="text-black">Log In</h1>
        </Button>
      </div>
    </header>
  );
}
