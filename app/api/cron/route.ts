import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await revalidatePath("/", "layout");
    return NextResponse.json(
      { revalidated: "all paths revalidated" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to revalidate paths"},
      { status: 500 }
    );
  }
}