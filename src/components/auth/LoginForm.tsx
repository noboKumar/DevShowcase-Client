"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email") as string;
    const password = form.get("password") as string;

    const { data } = await authClient.signIn.email(
      {
        email,
        password,
        /**
         * remember the user session after the browser is closed.
         * @default true
         */
        rememberMe: false,
      },
      {
        onSuccess: (ctx) => {
          toast.success(`Welcome back ${ctx.data.user.name}!`);
          router.push("/");
          console.log("full ctx.data:", ctx.data);
          console.log(ctx.data);
        },

        onError: (ctx) => {
          toast.error("Login failed: " + ctx.error.message);
          console.log(ctx.error.message);
        },
      },
    );
    setIsLoading(false);

    console.log(data);
  };

  return (
    <div className="flex w-full items-center justify-center rounded-2xl bg-white p-8 lg:w-1/2 dark:bg-slate-800">
      <div className="w-full max-w-lg">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-slate-200">
            Welcome back
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-200">
            Sign in to your account to continue
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div className="space-y-1.5">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 dark:text-slate-200"
            >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="h-10 border-gray-200 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 dark:text-slate-200"
              >
                Password
              </Label>
            </div>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="h-10 border-gray-200 pr-10 focus-visible:border-indigo-500 focus-visible:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400 transition-colors hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <Button
            disabled={isLoading}
            type="submit"
            className="mt-2 h-10 w-full bg-indigo-600 font-medium text-white hover:bg-indigo-700"
          >
            {isLoading ? "Logging in…" : "Login in"}
          </Button>

          <div className="relative my-4">
            <Separator />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-gray-400 dark:bg-slate-800">
              or
            </span>
          </div>

          {/* GitHub OAuth */}
          <Button
            variant="outline"
            className="h-10 w-full border-gray-200 font-medium text-gray-700 hover:bg-gray-50"
          >
            <FaGithub className="mr-2 h-4 w-4" />
            Continue with GitHub
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-indigo-600 hover:text-indigo-700"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
