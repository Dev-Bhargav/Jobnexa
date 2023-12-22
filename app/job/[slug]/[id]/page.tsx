import Detail from "@/app/ui/Detail";

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
