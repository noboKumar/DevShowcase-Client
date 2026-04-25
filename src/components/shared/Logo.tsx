import Link from "next/link";
import React from "react";
import { SeparatorVertical } from "lucide-react";

const Logo = () => {
  return (
    <div>
      <Link className="flex items-center gap-2" href={"/"}>
        <h1 className="bg-primary w-fit rounded-full p-2 text-xl font-bold text-white">
          <SeparatorVertical className="h-4 w-4 lg:w-full lg:h-full"/>
        </h1>
        <h1 className="text-primary md:text-xl font-bold">DevShowcase</h1>
      </Link>
    </div>
  );
};

export default Logo;
