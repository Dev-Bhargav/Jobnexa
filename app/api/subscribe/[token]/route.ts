import { prisma } from "@/lib/prisma";
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

  let updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      subscribed: true,
    },
  });

  prisma.$disconnect()
  redirect("/")
}
