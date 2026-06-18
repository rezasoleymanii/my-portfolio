"use client";

import { useState } from "react";

import Header from "@/components/layout/Header";

import Home from "@/components/sections/Home/page";
import About from "@/components/sections/About/page";
import Skills from "@/components/sections/Skills/page";
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
      {activePage === "about" && <About />}
      {activePage === "skills" && <Skills />}
      {activePage === "projects" && <Projects />}
      {activePage === "contact" && <Contact />}
    </>
  );
}