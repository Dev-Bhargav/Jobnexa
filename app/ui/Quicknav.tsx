import { QuicknavFetch } from "@/lib/data";
import Link from "next/link";

export default async function Quicknav() {
  const jobs = await QuicknavFetch();
  //! Make Proper Error
  if (!jobs) {
    throw new Error("No jobs available");
  }
  return (
    <div className="mt-5 md:mt-0 max-w-[920px] min-w-[330px] xl:w-1/2 2xl:max-w-[620px] rounded-sm border border-card-foreground bg-card">
      <div className="xl:w-full flex flex-col items-center">
        <div className="w-full px-4 flex flex-col items-center my-5">
          <div className="w-11/12">
            <h1 className="text-xl font-bold">
              Latest Govt Jobs
            </h1>
            {jobs
              .filter((job) => job.category === "govt")
              .map((job, index, array) => (
                <div key={index} className="w-full">
                  <div className="mt-3 w-11/12 mx-auto">
                    <Link
                      href={`/job/${job.slug.replace(/\s+/g, "-")}/${job.id}`}
                      className="text-secondary-foreground leading-5 hover:underline hover:text-accent"
                    >
                      {job.title}
                    </Link>
                    {index !== array.length - 1 && (
                      <div className="w-full my-2 h-[1px] bg-card-foreground"></div>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div className="w-11/12">
            <div className="my-5 h-[1px] bg-card-foreground"></div>
            <h1 className="text-xl font-bold">
              Latest Railway Jobs
            </h1>
            {jobs
              .filter((job) => job.category === "railway")
              .map((job, index, array) => (
                <div key={index} className="w-full">
                  <div className="mt-3 w-11/12 mx-auto">
                    <Link
                      href={`/job/${job.slug.replace(/\s+/g, "-")}/${job.id}`}
                      className="text-secondary-foreground leading-5 hover:underline hover:text-accent"
                    >
                      {job.title}
                    </Link>
                    {index !== array.length - 1 && (
                      <div className="w-full my-2 h-[1px] bg-card-foreground"></div>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div className="w-11/12">
            <div className="my-5 h-[1px] bg-card-foreground"></div>
            <h1 className="text-xl font-bold">
              Latest Bank Jobs
            </h1>
            {jobs
              .filter((job) => job.category === "bank")
              .map((job, index, array) => (
                <div key={index} className="w-full">
                  <div className="mt-3 w-11/12 mx-auto">
                    <Link
                      href={`/job/${job.slug.replace(/\s+/g, "-")}/${job.id}`}
                      className="text-secondary-foreground leading-5 hover:underline hover:text-accent"
                    >
                      {job.title}
                    </Link>
                    {index !== array.length - 1 && (
                      <div className="w-full my-2 h-[1px] bg-card-foreground"></div>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div className="w-11/12">
            <div className="my-5 h-[1px] bg-card-foreground"></div>
            <h1 className="text-xl font-bold">
              Latest Defence Jobs
            </h1>
            {jobs
              .filter((job) => job.category === "defence")
              .map((job, index, array) => (
                <div key={index} className="w-full">
                  <div className="mt-3 w-11/12 mx-auto">
                    <Link
                      href={`/job/${job.slug.replace(/\s+/g, "-")}/${job.id}`}
                      className="text-secondary-foreground leading-5 hover:underline hover:text-accent"
                    >
                      {job.title}
                    </Link>
                    {index !== array.length - 1 && (
                      <div className="w-full my-2 h-[1px] bg-card-foreground"></div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
