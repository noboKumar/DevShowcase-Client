"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { Mail, User } from "lucide-react";

const UserProfile = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="mx-auto my-20 max-w-3xl overflow-hidden rounded-2xl border bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      {/* Cover Photo */}
      <div
        className="h-32 w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/cKYy1wzw/laptop-with-glowing-screen-table-dark-top-view-copy-space-169016-51607.avif')",
        }}
      />

      {/* Profile Content */}
      <div className="relative flex flex-col items-center px-6 pb-6 text-center">
        <Image
          src={user?.image ?? ""}
          alt="Profile Avatar"
          width={1000}
          height={1000}
          className="-mt-12 h-24 w-24 rounded-full border-4 border-white object-cover shadow-md dark:border-zinc-900"
        />

        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-center gap-2">
            <User className="text-muted-foreground h-4 w-4" />
            <h1 className="text-lg font-semibold text-zinc-900 dark:text-white">
              {user?.name ?? "Unknown User"}
            </h1>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Mail className="text-muted-foreground h-4 w-4" />
            <p className="text-muted-foreground text-sm">
              {user?.email ?? "No email found"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
