import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./../Header";
import "../css/layout.css";
export default function Layout() {
  return (
    <div className="row min-h-screen bg-[#fafafa] dark:bg-[#202c37] dark:text-white">
      <Header />
      <Outlet />
    </div>
  );
}
