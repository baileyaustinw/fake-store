//import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Index from "./Index";
import Navbar from "../components/Navbar";
import "../styles/App.css";

export default function Root() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Navbar />
      <div id="content">{!isHomePage ? <Outlet /> : <Index />}</div>
    </>
  );
}
