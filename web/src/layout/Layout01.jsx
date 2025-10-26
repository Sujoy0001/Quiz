import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";

export default function Layout01() {
  return (
    <div className="min-h-screen flex flex-col">
        <Navber />
        <main className="flex-1 p-0">
            <Outlet />
        </main>
        <Footer />
    </div>
  );
}
