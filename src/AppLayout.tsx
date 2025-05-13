// layouts/AppLayout.tsx
import React from "react";
import Header from "@src/components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router";
import PlayerBar from "./components/PlayerBar/PlayerBar";

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
