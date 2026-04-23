import Link from "next/link";
import React from "react";
import { SeparatorVertical } from "lucide-react";

const Logo = () => {
  return (
    <div>
      <Link className="flex items-center gap-2" href={"/"}>
        <h1 className="w-fit rounded-full bg-indigo-600 p-2 text-xl font-bold text-white">
          <SeparatorVertical />
        </h1>
        <h1 className="text-2xl font-bold text-indigo-600">Dev ShowCase</h1>
      </Link>
    </div>
  );
};

export default Logo;
