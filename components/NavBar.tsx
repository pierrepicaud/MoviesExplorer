import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useRef } from "react";
import BackDrop from "./BackDrop";
import { useUser} from "@auth0/nextjs-auth0/dist/frontend/use-user";

function NavBar() {
  const { user, error } = useUser();
  let link = "/api/auth/login";
  let text = "Join"
  if (user) {
    link = "/api/auth/logout"
    text = "Logout"
  }

  const navRef = useRef<HTMLElement>(null);
  const bdropRef = useRef<HTMLElement>(null);
  const showNavBar = () => {
    navRef.current?.classList.toggle("translate-x-full");
    bdropRef.current?.classList.toggle("bg-opacity-60");
    bdropRef.current?.classList.toggle("hidden");
  };
  return (
    //wrap this shit around some column flex box
    <>
      <BackDrop showNavBar={showNavBar} ref={bdropRef} />
      <nav className="bg-gray-700 flex flex-row justify-between items-center">
        <div className="font-bold text-neutral-100 p-4 tracking-widest font-bebasneue">
          <Link href="/" legacyBehavior>
            <a className="text-base md:text-2xl md:hover:text-3xl hover:text-lg transition-all duration-100">
              Movie <span className="text-red-600">Explorer</span>
            </a>
          </Link>
        </div>

        <div className="font-bold text-neutral-100 p-4 tracking-widest font-bebasneue space-x-3">
          <button onClick={showNavBar}>
            <FaBars className="h-6 hover:text-lg transition-all duration-100" />
          </button>
        </div>
      </nav>

      <nav
        className="side-nav fixed bg-gray-700 top-0 right-0 flex flex-col items-center font-bold text-neutral-100 tracking-widest font-bebasneue transition-all duration-200 pt-4 pl-2 pr-2 translate-x-full"
        ref={navRef}
      >
        <button onClick={showNavBar}>
          <GrClose className="text-base md:text-2xl text-white mb-4 hover:bg-slate-50"></GrClose>
        </button>

        <Link href={link} legacyBehavior>
          <a className="text-base md:text-2xl text-white mb-4 hover:bg-slate-50 hover:text-black">
            {text}
          </a>
        </Link>

        <Link href="/upcoming" legacyBehavior>
          <a className="text-base md:text-2xl text-white mb-4 hover:bg-slate-50 hover:text-black">
            Upcoming
          </a>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
