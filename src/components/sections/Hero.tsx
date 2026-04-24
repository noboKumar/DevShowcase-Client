"use client";
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
      <div className="mt-40 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          The ultimate <span className="text-indigo-500">stage</span> <br /> for
          your professional code.
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
          DevShowcase is the premium SaaS platform for developers to exhibit
          high-fidelity engineering projects and connect with top-tier tech
          companies.
        </p>
        <div className="my-5 space-x-4 text-center">
          <Button className="rounded-full px-5 py-6">
            Explore Projects <ArrowRight></ArrowRight>{" "}
          </Button>
          <Button className="rounded-full px-5 py-6" variant={"outline"}>
            Add Project
          </Button>
        </div>
        <div className="flex flex-col items-center py-5">
          <div>
            <AvatarGroup>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <AvatarGroupCount className="bg-gray-300 font-medium">+5</AvatarGroupCount>
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
