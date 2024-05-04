import Link from "next/link";
import React, { useState } from "react";
import Button from "../reusable-components/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";

const links: { name: string; href: string }[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/#",
  },
  {
    name: "Log in",
    href: "/login",
  },
  {
    name: "Sign up",
    href: "/signup",
  },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <div className=" relative md:p-8 p-5">
      <div className="flex justify-between items-center">
        {/* logo */}
        <Link href={"/"} className="text-2xl font-bold cursor-pointer">
          Project Demo
        </Link>

        {/* nav links */}
        <ul className=" md:flex justify-between gap-5 hidden">
          {links.slice(0, 2).map((link, index) => (
            <li key={index}>
              <Link
                href={link?.href}
                className=" text-lg text-gray-500 hover:underline active:text-blue-500 "
              >
                {link?.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* auth links */}
        <ul className="hidden md:flex justify-between items-center gap-4">
          {links.slice(2, 4).map((link, index) => (
            <li key={index}>
              <Button
                size="lg"
                variant={link?.name === "Sign up" ? "primary" : "outlined"}
                href={link?.href}
              >
                {link?.name}
              </Button>
            </li>
          ))}
        </ul>

        {/* mobile menu */}
        <div className="md:hidden block">
          {!toggleMenu ? (
            <RxHamburgerMenu size={24} onClick={() => setToggleMenu(true)} />
          ) : (
            <RiCloseLine size={24} onClick={() => setToggleMenu(false)} />
          )}
        </div>
      </div>
      {toggleMenu && (
        <div className="md:hidden absolute w-full right-0 flex flex-col justify-center gap-6 py-12 border-r border-l border-b rounded-lg shadow ">
          <ul className=" flex flex-col items-center gap-5">
            {links.slice(0, 2).map((link, index) => (
              <li key={index}>
                <Link
                  href={link?.href}
                  className=" text-lg border-b text-gray-500 hover:underline active:text-blue-500 "
                >
                  {link?.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className=" flex justify-center items-center gap-4">
            {links.slice(2, 4).map((link, index) => (
              <li key={index}>
                <Button
                  size="lg"
                  variant={link?.name === "Sign up" ? "primary" : "outlined"}
                  href={link?.href}
                >
                  {link?.name}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
