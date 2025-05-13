// src/components/Sidebar/Sidebar.tsx
import {
  homeFillIcon,
  homeIcon,
  libraryFillIcon,
  libraryIcon,
  likedSongsIcon,
  plusLibraryIcon,
  searchFillIcon,
  searchIcon,
} from "@src/assets";
import React from "react";
import { NavLink } from "react-router";

const Sidebar: React.FC = () => {
  const tabList = [
    {
      icon: homeIcon,
      select_icon: homeFillIcon,
      title: "Home",
      link: "/",
    },
    {
      icon: searchIcon,
      select_icon: searchFillIcon,
      title: "Search",
      link: "/search",
    },
    {
      icon: libraryIcon,
      select_icon: libraryFillIcon,
      title: "Your Library",
      link: "/library",
    },
    {
      icon: plusLibraryIcon,
      select_icon: plusLibraryIcon,
      title: "Create Playlist",
      link: "/playlist",
    },
    {
      icon: likedSongsIcon,
      select_icon: likedSongsIcon,
      title: "Liked Songs",
      link: "/liked-songs",
    },
  ];
  const playlists = [
    "Chill Mix",
    "Insta Hits",
    "Your Top Songs 2021",
    "Mellow Songs",
    "Anime Lofi & Chillhop Music",
    "BG Afro “Select” Vibes",
    "Afro “Select” Vibes",
    "Happy Hits!",
    "Deep Focus",
    "Instrumental Study",
    "OST Compilations",
    "Nostalgia for old souled mill...",
    "Mixed Feelings",
  ];

  return (
    <aside className="w-[310px] pt-16 max-sm:hidden flex flex-col h-full justify-between">
      <div className="px-7 overflow-y-auto flex flex-col">
        <div className="flex flex-col gap-5">
          {tabList.map((item, index) => {
            return (
              <div key={index}>
                <NavLink to={item.link}>
                  {({ isActive }) => {
                    return (
                      <div
                        className={`flex items-center gap-5 ${
                          isActive ? "opacity-100" : "opacity-50"
                        }`}
                      >
                        <img
                          src={isActive ? item.select_icon : item.icon}
                          alt={`${item.title} icon`}
                        />
                        {item.title}
                      </div>
                    );
                  }}
                </NavLink>
              </div>
            );
          })}
        </div>
        <div className="mt-10 overflow-y-auto">
          <div className="flex flex-col gap-3">
            {playlists.map((playlist, index) => (
              <div
                key={index}
                className="text-sm opacity-50 hover:opacity-100 cursor-pointer truncate"
                title={playlist}
              >
                {playlist}
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
