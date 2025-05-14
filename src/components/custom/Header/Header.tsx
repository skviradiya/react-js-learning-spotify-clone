import { downChevronIcon, homeHederLogoImage } from "@src/assets";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "@src/store/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@src/components/ui/dropdown-menu";
import { useAuth } from "@src/context/AuthContext";
import cacheAccessKeys from "@src/constants/cacheAccessKeys";
import { userActions } from "@src/store/slice/userSlice";

export default function Header() {
  const { userData } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const dropdownList = [
    {
      title: "Account",
    },
    {
      title: "Profile",
    },
    {
      title: "Private session",
    },
    {
      title: "Settings",
    },
  ];
  const handleLogout = () => {
    setIsAuthenticated(false);
    dispatch(userActions.setUserData(undefined));
    localStorage.removeItem(cacheAccessKeys.USER_DATA);
    window.location.reload();
  };
  return (
    <header className="sticky top-0 flex gap-10 z-1 items-center justify-between bg-[#181818]">
      <div className="flex gap-5 items-center">
        <img src={homeHederLogoImage} width={50} height={50} />
        <div className="text-4xl max-sm:text-2xl font-bold">Spotify</div>
      </div>

      {userData?.name ? (
        <DropdownMenu modal>
          <DropdownMenuTrigger asChild>
            <div className="flex flex-wrap gap-3 bg-black/50 self-center rounded-full p-1 pr-3 items-center">
              <img
                src="https://picsum.photos/id/271/200/300"
                className="size-7 rounded-full"
              />
              <div className="text-xs max-w-25 overflow-hidden line-clamp-1 overflow-ellipsis">
                {userData.name}
              </div>
              <img src={downChevronIcon} className="cursor-pointer size-3.5" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-[#282828] border-0 mr-5">
            {dropdownList.map((item, index) => (
              <DropdownMenuItem key={index} className="hover:bg-white/5">
                {item.title}
              </DropdownMenuItem>
            ))}
            <div className="h-[1px] my-1 w-full bg-[#3E3E3E]" />
            <DropdownMenuItem
              className="hover:bg-white/5"
              onClick={handleLogout}
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex max-sm:flex-col gap-5">
          <Button onClick={() => navigate("/signup")}>Sign Up</Button>
          <Button className="bg-white " onClick={() => navigate("/login")}>
            <h1 className="text-black">Log In</h1>
          </Button>
        </div>
      )}
    </header>
  );
}
