import Detail from "@/app/ui/Detail";
import { fetchJob } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    id: string;
    slug: string;
  }>;
}) {
  try {
    const { id, slug } = await params;
    const job = await fetchJob(id);
    if (!job) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist",
      };
    }
    return {
      title: job.title,
      description: job.description,
      alternates: {
        canonical: `/job/${slug}/${id}`,
      },
    };
  } catch (err) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
    slug: string;
  }>;
}) {
  const { id } = await params;
  return <Detail id={id} />;
}
