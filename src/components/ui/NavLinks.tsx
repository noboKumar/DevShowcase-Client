"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Explore Projects",
      path: "/projects",
    },
    {
      name: "About",
      path: "/about",
    },
  ];
  const pathName = usePathname();
  return (
    <>
      {navLinks.map((link) => (
        <Link
          className={`m-2 font-medium text-gray-600 transition-colors hover:text-indigo-500 hover:underline active:text-gray-600 dark:text-gray-300 dark:hover:text-indigo-500 ${pathName === link.path ? "text-indigo-500 underline" : ""}`}
          href={link.path}
          key={link.name}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
