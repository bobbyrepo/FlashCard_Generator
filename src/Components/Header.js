import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../CSS/Header.css";

function Header() {
  const [activeNav, setActiveNav] = useState("Create New");
  const location = useLocation();

  useEffect(() => {
    // Update activeNav based on current URL path
    if (location.pathname === "/") {
      setActiveNav("Create New");
    } else if (location.pathname === "/flashcards") {
      setActiveNav("My Flashcard");
    }
  }, [location.pathname]);

  return (
    <>
      <div className='relative w-9/12 mx-auto'>
        <div className=' pb-5 '>
          <h1 className='h1 nav-title'>Create Flashcard</h1>
          {/* <div className='h2 flex space-x-10 px-3'><a className='page' href='#s'>Create New</a><a className='page' href='#s'>My Flashcard</a></div> */}
          <div className='relative nav-links h2'>
            <ul>
              <li
                className={`lnk ${activeNav === "Create New" ? "active" : ""}`}
                // onClick={() => setActiveNav("Create New")}
              >
                <Link to={`/`}>Create New</Link>
              </li>
              <li
                className={`lnk ${
                  activeNav === "My Flashcard" ? "active" : ""
                }`}
                // onClick={() => setActiveNav("My Flashcard")}
              >
                <Link to={`/flashcards`}>My Flashcard</Link>
              </li>
            </ul>
            <hr className='absolute bottom-0 w-full bg-gray-300 mt-2 h-0.4' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
