import Detail from "@/app/ui/Detail";
import { fetchJob } from "@/lib/data";

export async function generateMetadata({params}:{
  params:{
    id : string
  }
}){
  try{
    const job = await fetchJob(params.id)
    if(!job){
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist"
      }
    }
    return {
      title: job.title,
      description: job.description
    }
  }catch(err){
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist"
    }
  }
}

export default function Page({
  params,
}: {
  params: {
    slug: string;
    id: string;
  };
}) {
  return <Detail id={params.id} />;
}
