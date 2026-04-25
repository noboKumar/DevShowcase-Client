import React from "react";
import { Button } from "@/components/ui/button";
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
        <Button className="lg:hidden" variant="outline">
          <Menu></Menu>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <Link className="cursor-pointer" href="/">
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link className="cursor-pointer" href="/projects">
              Explore Projects
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
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
