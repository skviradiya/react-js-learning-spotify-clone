import { backArrowIcon, downChevronIcon, forwardArrowIcon } from "@src/assets";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@src/components/ui/dropdown-menu";
import cacheAccessKeys from "@src/constants/cacheAccessKeys";
import { useAuth } from "@src/context/AuthContext";
import { userActions } from "@src/store/slice/userSlice";
import { useAppDispatch, useAppSelector } from "@src/store/store";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function UserPageHeader({ className, children }: Props) {
  const { userData } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { setIsAuthenticated } = useAuth();
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
    <div className={`sticky top-0 p-4 flex justify-between z-10 ${className}`}>
      <div className="flex gap-5">
        <img src={backArrowIcon} className="size-8" />
        <img src={forwardArrowIcon} className="size-8" />
      </div>
      {children}
      {userData?.name && (
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
      )}
    </div>
  );
}
