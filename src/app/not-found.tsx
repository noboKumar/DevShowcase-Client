import Link from "next/link";
import { Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 dark:bg-slate-950">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/40">
          <SearchX className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
        </div>

        {/* 404 */}
        <p className="mb-2 text-sm font-semibold tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
          ERROR 404
        </p>

        <h1 className="mb-3 text-4xl font-black text-slate-900 dark:text-white">
          Page Not Found
        </h1>

        <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          Sorry, the page you’re looking for doesn’t exist, was moved, or the
          link may be broken.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          <Home className="h-4 w-4" />
          Return Home
        </Link>
      </div>
    </main>
  );
}
