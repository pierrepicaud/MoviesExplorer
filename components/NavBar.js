import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import {useRef} from "react";


function NavBar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("translate-x-full");
  };

  return (
    <>
      <nav className="bg-gray-700 flex flex-row justify-between items-center">
        <div className="font-bold text-neutral-100 p-4 tracking-widest font-bebasneue">
          <Link href="/" legacyBehavior>
            <a className="text-base md:text-2xl">
              Watch <span className="text-red-600">Me</span>
            </a>
          </Link>
        </div>

        <div className="font-bold text-neutral-100 p-4 tracking-widest font-bebasneue space-x-3">
          <button onClick={showNavbar}>
            <FaBars className="h-6" />
          </button>
        </div>
      </nav>
      <nav className="side-nav fixed w-1/6 bg-gray-700 h-screen top-0 right-0 flex flex-col items-center font-bold text-neutral-100 tracking-widest font-bebasneue transition-all duration-100" ref={navRef}>
        <button onClick={showNavbar} className="mt-6 mb-5">
          <FaBars className="h-6 text-white" />
        </button>

        <Link href="/login" legacyBehavior>
            <a className="text-base md:text-2xl text-white mb-4">Login</a>
        </Link>

        <Link href="/register" legacyBehavior>
            <a className="text-base md:text-2xl text-white">Register</a>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
