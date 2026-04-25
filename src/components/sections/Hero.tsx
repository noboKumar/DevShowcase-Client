"use client";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "../ui/avatar";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="md:mt-40 mt-20 w-full space-y-5">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-4xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          The ultimate <span className="text-indigo-500">stage</span> <br /> for
          your professional code.
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-xl text-center font-medium text-gray-500 dark:text-neutral-500">
          DevShowcase is the premium SaaS platform for developers to exhibit
          high-fidelity engineering projects and connect with top-tier tech
          companies.
        </p>
        <div className="my-5 space-x-4 text-center">
          <Button asChild className="z-50 rounded-full px-5 py-6">
            <Link href="/projects" className="flex items-center gap-2">
              Explore Projects <ArrowRight></ArrowRight>{" "}
            </Link>
          </Button>
          <Button className="z-50 rounded-full px-5 py-6" variant={"outline"}>
            <Link href="/projects/add" className="flex items-center gap-2">
              Add Project
            </Link>
          </Button>
        </div>
        <div className="flex flex-col items-center py-5">
          <div>
            <AvatarGroup>
              <Avatar>
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/1848375?v=4"
                  alt="@jhankar_vai"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/67517709?v=4"
                  alt="@mezba_vai"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/88623086?v=4"
                  alt="@safayat_vai"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <AvatarGroupCount className="bg-gray-300 font-medium">
                +5
              </AvatarGroupCount>
            </AvatarGroup>
          </div>
          <div className="font-medium text-gray-400">
            Joined by 10k+ engineers this month
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
