import Link from "next/link";
import React from "react";
import { SeparatorVertical } from "lucide-react";

const Logo = () => {
  return (
    <div>
      <Link className="flex items-center gap-2" href={"/"}>
        <h1 className="bg-primary w-fit rounded-full p-2 text-xl font-bold text-white">
          <SeparatorVertical />
        </h1>
        <h1 className="text-primary text-xl font-bold">DevShowcase</h1>
      </Link>
    </div>
  );
};

export default Logo;
