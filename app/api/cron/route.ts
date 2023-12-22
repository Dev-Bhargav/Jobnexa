import { revalidatePath } from "next/cache";

export function GET() {
  revalidatePath("/", "layout");
  console.log("I RAN")
}