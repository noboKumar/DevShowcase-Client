import { Button } from "../ui/button";
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
    <div className="sticky top-0 z-50 mx-auto mt-2 flex w-10/12 items-center justify-between rounded-full border-2 border-gray-200 bg-white/30 px-8 py-4 backdrop-blur-md">
      <div className="flex items-center gap-5">
        <Logo></Logo>
        <div>
          {navLinks.map((link) => (
            <Link
              className="m-2 font-medium text-gray-600 hover:text-indigo-500 hover:underline active:text-gray-600"
              href={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-5">
        <ThemeToggler></ThemeToggler>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default NavBar;
