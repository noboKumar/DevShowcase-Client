const stats = [
  { value: "500+", label: "Projects Shared" },
  { value: "120+", label: "Developers" },
  { value: "35+",  label: "Tech Stacks" },
  { value: "1K+",  label: "Total Views" },
];

const techs = [
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "PostgreSQL", "MongoDB", "Prisma", "Tailwind CSS", "Docker",
  "GraphQL", "Redis", "Firebase", "Flutter", "Python",
  "Go", "Rust", "AWS", "Vercel", "GitHub Actions",
];

const CommunityStats = () => {
  return (
    <section className="my-16 overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="px-8 py-12 md:px-14">

        {/* Heading */}
        <div className="mb-10 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-500">
              Community
            </p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
              Trusted by a Growing
              <br />
              Developer Community
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            Real projects from real engineers — shipped, shared, and discovered every day.
          </p>
        </div>

        {/* Stats row */}
        <div className="mb-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 dark:border-slate-800 dark:bg-slate-800 sm:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-1 bg-white px-6 py-8 dark:bg-slate-900"
            >
              <span className="text-4xl font-black tabular-nums text-indigo-600 dark:text-indigo-400">
                {value}
              </span>
              <span className="text-xs font-medium text-slate-400">{label}</span>
            </div>
          ))}
        </div>

        {/* Divider + tech label */}
        <div className="mb-5 flex items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Technologies in the wild
          </span>
          <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CommunityStats;