"use client";

import Link from "next/link";
import { SeparatorVertical } from "lucide-react";

const Logo = () => {
  return (
    <Link className="flex items-center gap-2" href={"/"}>
      <span className="bg-primary w-fit rounded-full p-2 text-xl font-bold text-white">
        <SeparatorVertical className="h-4 w-4 lg:h-full lg:w-full" />
      </span>
      <span className="text-primary font-bold md:text-xl">DevShowcase</span>
    </Link>
  );
};

export default Logo;
