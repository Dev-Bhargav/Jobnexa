import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      token: string;
    };
  }
) {
  const { token } = params;

  const user = await prisma.user.findFirst({
    where: {
      ActivatToken: {
        some: {
          AND: [
            {
              createdAt: {
                gt: new Date(Date.now() - 24 * 60 * 60 * 1000),
              },
            },
            { token },
          ],
        },
      },
    },
  });

  if (!user) {
    throw new Error("Somthing went wrong");
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      subscribed: true,
    },
  });

  await prisma.activatToken.delete({
    where: {
      token,
    },
  });
  prisma.$disconnect();
  revalidatePath("/");
  redirect("/");
}
