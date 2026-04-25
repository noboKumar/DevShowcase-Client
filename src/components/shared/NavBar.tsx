import NavBarUser from "../ui/NavBarUser";
import NavMenu from "../ui/NavMenu";
import { ThemeToggler } from "../ui/ThemeToggler";
import Logo from "./Logo";
import Link from "next/link";

const NavBar = () => {
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
  return (
    <div className="sticky top-0 z-50 mx-auto flex items-center justify-between border-2 border-gray-200 bg-white/30 px-2 py-4 backdrop-blur-md md:px-8 lg:mt-2 lg:w-10/12 lg:rounded-full dark:border-gray-700 dark:bg-gray-800/30">
      <div className="flex items-center gap-5">
        <NavMenu></NavMenu>
        <Logo></Logo>
        <div className="hidden lg:block">
          {navLinks.map((link) => (
            <Link
              className="m-2 font-medium text-gray-600 hover:text-indigo-500 hover:underline active:text-gray-600 dark:text-gray-300"
              href={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 lg:gap-5">
        <ThemeToggler></ThemeToggler>
        <NavBarUser></NavBarUser>
      </div>
    </div>
  );
};

export default NavBar;
