"use client";
import logo from "../../../public/images/logo.png";
import "../layout/layout.css"

export default function Header({ activePage, setActivePage }) {
 return (
    <header className="flex items-center justify-between w-full p-2 border-b border-[#3333336b]">
      <div className="flex items-center">
        <img src={logo.src} alt="" width={80} height={20} />
        <span>REZA</span>
      </div>

      <div className="flex items-center pr-8 gap-8">
        <ul className="nav-menu flex gap-8">
          <li
            className={activePage === "home" ? "active" : ""}
            onClick={() => setActivePage("home")}
          >
            Home
          </li>

          <li
            className={activePage === "about" ? "active" : ""}
            onClick={() => setActivePage("about")}
          >
            About
          </li>

          <li
            className={activePage === "skills" ? "active" : ""}
            onClick={() => setActivePage("skills")}
          >
            Skills
          </li>

          <li
            className={activePage === "projects" ? "active" : ""}
            onClick={() => setActivePage("projects")}
          >
            projects
          </li>

          <li
            className={activePage === "contact" ? "active" : ""}
            onClick={() => setActivePage("contact")}
          >
            Contact
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <button className="flex  py-[5px] px-[18px] text-[#047ff5] rounded-lg border border-[#0761bb]">
            <a href="">Git hub me</a>
          </button>

          <i className="bi bi-moon-fill"></i>
        </div>
      </div>
    </header>
  );
}