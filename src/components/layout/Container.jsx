"use client";

import { useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/components/sections/Home/page";
import About from "@/components/sections/About/page";
import Projects from "@/components/sections/Projects/page";
import Contact from "@/components/sections/Contact/page";
export default function Container(){
    const [activePage, setActivePage] = useState("home");

  return (
    <>
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {activePage === "home" && <Home setActivePage={setActivePage} />}
      {activePage === "about" && <About setActivePage={setActivePage}/>}
      {activePage === "projects" && <Projects setActivePage={setActivePage}/>}
      {activePage === "contact" && <Contact />}

      <Footer />
    </>
  );
}