
import ManageProjectTable from "@/components/shared/ManageProjectTable";

const page = () => {
  return (
    <div className="my-5 min-h-screen rounded-2xl bg-slate-50 px-10 py-5 text-slate-900 dark:bg-slate-900 dark:text-slate-200">
      <div className="mb-10 max-w-xl">
        <h1 className="mb-3 text-4xl font-black tracking-tight text-slate-900 dark:text-slate-200">
          Manage Projects
        </h1>
        <p className="text-base leading-relaxed text-slate-500">
          Central hub for your engineering portfolio. Update, refine, or
          organize your technical showcases for maximum impact.
        </p>
      </div>
      <div>
        <ManageProjectTable />
      </div>
    </div>
  );
};

export default page;
