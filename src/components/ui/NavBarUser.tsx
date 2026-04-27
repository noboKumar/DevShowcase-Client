"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronDown, FolderPlus, LayoutDashboard, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NavBarUser = () => {
  const { data: session, isPending } = authClient.useSession();
  const [showSignOutDialog, setShowSignOutDialog] = useState(false);
  const router = useRouter();
  const user = session?.user;

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "?";

  const formattedName = user?.name
    ? user.name
        .toLowerCase()
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "";

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  if (isPending) {
    return (
      <div className="flex items-center gap-2 rounded-full border border-gray-200 py-1 pr-3 pl-1 dark:border-slate-700">
        <Skeleton className="h-7 w-7 rounded-full bg-gray-400" />
        <Skeleton className="h-4 w-20 rounded-md bg-gray-400" />
      </div>
    );
  }

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 rounded-full border border-gray-200 py-1 pr-3 pl-1 transition-colors hover:bg-gray-50 focus:outline-none dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <Avatar className="h-7 w-7">
                <AvatarImage src={user.image ?? ""} alt={user.name ?? "User"} />
                <AvatarFallback className="bg-indigo-100 text-xs font-semibold text-indigo-600">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <span className="max-w-25 truncate text-sm font-medium text-gray-700 dark:text-slate-200">
                {formattedName}
              </span>
              <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuLabel className="font-normal">
              <p className="text-sm font-semibold text-gray-800 dark:text-slate-100">
                {formattedName}
              </p>
              <p className="truncate text-xs text-gray-400">{user.email}</p>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link
                  href="/projects/add"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <FolderPlus className="h-4 w-4 text-indigo-500" />
                  Add Project
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/projects/manage"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <LayoutDashboard className="h-4 w-4 text-indigo-500" />
                  Manage Projects
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => setShowSignOutDialog(true)}
              className="flex cursor-pointer items-center gap-2 text-red-500 focus:text-red-500"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
          <Link href="/login">Get Started</Link>
        </Button>
      )}

      <AlertDialog open={showSignOutDialog} onOpenChange={setShowSignOutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Sign out?</AlertDialogTitle>
            <AlertDialogDescription>
              You will be redirected to the login page.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleSignOut}
              className="bg-red-500 text-white hover:bg-red-600"
            >
              Yes, sign out
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default NavBarUser;
