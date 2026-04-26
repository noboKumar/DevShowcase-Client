"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <Button
      onClick={handleBack}
      variant="ghost"
      className="mb-8 inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </Button>
  );
};

export default BackBtn;
