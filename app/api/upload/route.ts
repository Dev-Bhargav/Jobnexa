import { existsSync, mkdirSync } from "fs";
import sharp from "sharp";
import { NextRequest, NextResponse } from "next/server";

function resizeImage(
  imageBuffer: Buffer,
  filePath: string
): Promise<sharp.OutputInfo> {
  return new Promise((resolve, reject) => {
    sharp(imageBuffer)
      .toFile(filePath, (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve(info);
        }
      });
  });
}

export async function POST(request: NextRequest) {
  let data = await request.formData();
  let file:any = data.get("file");

  let bytes = await file.arrayBuffer();
  let imageBuffer = Buffer.from(bytes);

  const uploadFolder = "public/uploads";

  if (!existsSync(uploadFolder)) {
    mkdirSync(uploadFolder, { recursive: true });
  }

  const filePath = `${uploadFolder}/${file.name}`;

  try {
    await resizeImage(imageBuffer, filePath);

    return NextResponse.json({
      success: 1,
      file: {
        url: `${process.env.NEXT_PUBLIC_VAR_URL}/uploads/${file.name}`,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: 0,
      error: "Failed to process the image.",
    });
  }
}
