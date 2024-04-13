import Link from "next/link";
import React from "react";
import { FaBlog } from "react-icons/fa6";

const NavBar = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Signin", href: "/signin" },
    { label: "Signout", href: "/signout" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBlog />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;