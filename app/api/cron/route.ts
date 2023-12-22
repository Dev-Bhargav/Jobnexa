import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export function GET() {
  revalidatePath("/", "layout");
  return NextResponse.json(
    { revalidated: "all paths revalidated" },
    { status: 200 }
  );
}
