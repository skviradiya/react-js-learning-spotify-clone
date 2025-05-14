// layouts/AppLayout.tsx
import Header from "@src/components/custom/Header/Header";
import React from "react";
import { Outlet } from "react-router";
import PlayerBar from "./components/custom/PlayerBar/PlayerBar";
import Sidebar from "./components/custom/Sidebar/Sidebar";

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <PlayerBar />
    </div>
  );
};

export default AppLayout;
