import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

const NavMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer rounded-3xl border px-3 py-2 lg:hidden">
          <Menu />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link className="cursor-pointer" href="/">
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="cursor-pointer" href="/projects">
              Explore Projects
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="cursor-pointer" href="/about">
              About
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavMenu;
