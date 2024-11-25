import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="w-4/5 max-w-[920px] min-w-[330px] xl:w-3/4 xl:px-10 flex gap-3 flex-col">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-lg font-semibold">Something&apos;s missing</h2>
      <p>This page is missing or you assembled 
      <p></p>the link incorrectly</p>
      <Link href="/" className="text-blue-400">Go to website &#x1F852;</Link>
    </div>
  );
}