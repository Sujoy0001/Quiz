import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout02() {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-0">
            <Outlet />
        </main>
        <Footer />
    </div>
  );
}
