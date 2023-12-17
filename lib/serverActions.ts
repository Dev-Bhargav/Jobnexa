"use server";

import { createBlog } from "./data";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";
import { randomUUID } from "crypto";
import { z } from "zod";

interface EditorContent {
  time: number;
  blocks: Array<Record<string, string | object>>;
  version: string;
}

export async function handleFormSubmit(
  e: FormData,
  editorContent: EditorContent
) {
  let uploadBlogDetails: any = {
    title: e.get("title"),
    description: e.get("description"),
    content: editorContent,
    category: e.get("category"),
  };
  let response = await createBlog(uploadBlogDetails).catch((err) =>
    console.log(err.message)
  );

  const subscribers = ["bhargavdinesh5406@gmail.com"];

  // Send email to each subscriber
  for (const subscriber of subscribers) {
    await sendMail(
      subscriber,
      "New Blog Alert",
      `<!DOCTYPE html>
      <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
      
      <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css"><!--<![endif]-->
        <style>
          * {
            box-sizing: border-box;
          }
      
          body {
            margin: 0;
            padding: 0;
          }
      
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
          }
      
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
          }
      
          p {
            line-height: inherit
          }
      
          .desktop_hide,
          .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
          }
      
          .image_block img+div {
            display: none;
          }
      
          @media (max-width:670px) {
      
            .desktop_hide table.icons-inner,
            .social_block.desktop_hide .social-table {
              display: inline-block !important;
            }
      
            .icons-inner {
              text-align: center;
            }
      
            .icons-inner td {
              margin: 0 auto;
            }
      
            .mobile_hide {
              display: none;
            }
      
            .row-content {
              width: 100% !important;
            }
      
            .stack .column {
              width: 100%;
              display: block;
            }
      
            .mobile_hide {
              min-height: 0;
              max-height: 0;
              max-width: 0;
              overflow: hidden;
              font-size: 0px;
            }
      
            .desktop_hide,
            .desktop_hide table {
              display: table !important;
              max-height: none !important;
            }
          }
        </style>
      </head>
      
      <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
          <tbody>
            <tr>
              <td>
                <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #07071f;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #060e21; color: #000000; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5211/fashiong-bg3.jpg'); background-repeat: no-repeat; width: 650px; margin: 0 auto;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-top:10px;">
                                      <div style="color:#393d47;font-family:'Oswald',Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:11px;letter-spacing:9px;line-height:120%;text-align:center;mso-line-height-alt:13.2px;">
                                        <p style="margin: 0; word-break: break-word;"><span style="color:#ffffff;"><strong>&nbsp;WWW.ARKABOUTIQUE.COM<br></strong></span></p>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <div class="spacer_block block-2" style="height:75px;line-height:75px;font-size:1px;">&#8202;</div>
                                <table class="image_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                      <div class="alignment" align="center" style="line-height:10px">
                                        <div style="max-width: 130px;"><a href="http://example.com" target="_blank" style="outline:none" tabindex="-1"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5211/arkalogotemplate.png" style="display: block; height: auto; border: 0; width: 100%;" width="130" alt="Arka Boutique Logo" title="Arka Boutique Logo"></a></div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <div class="spacer_block block-4" style="height:155px;line-height:155px;font-size:1px;">&#8202;</div>
                                <table class="divider_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="15%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px dashed #7DE5E5;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="heading_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="text-align:center;width:100%;">
                                      <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 86px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 103.2px;"><strong>New Blog Post</strong></h1>
                                    </td>
                                  </tr>
                                </table>
                                <table class="paragraph_block block-7" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:35px;padding-left:35px;padding-right:35px;padding-top:10px;">
                                      <div style="color:#393d47;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:17px;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:25.5px;">
                                        <p style="margin: 0; word-break: break-word;"><span style="color: #ffffff;">New Job Notification alter check out may be it yours</span></p>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="heading_block block-8" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <h1 style="margin: 0; color: #9573ff; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 45.6px;"><span class="tinyMce-placeholder"><a href="http://localhost:3000" target="_blank" style="text-decoration: underline; color: #9686d1;" rel="noopener">http://localhost:3000</a></span></h1>
                                    </td>
                                  </tr>
                                </table>
                                <table class="divider_block block-9" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:60px;">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="10%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px dashed #B23AB6;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #07071f;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #060e21; color: #000000; width: 650px; margin: 0 auto;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 30px; padding-right: 30px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="divider_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px dashed #B23AB6;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:15px;padding-top:20px;text-align:center;width:100%;">
                                      <h2 style="margin: 0; color: #7de5e5; direction: ltr; font-family: 'Oswald', Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 31px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 37.199999999999996px;"><strong>DO YOU NEED TO RETURN A PRODUCT?</strong></h2>
                                    </td>
                                  </tr>
                                </table>
                                <table class="button_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center"><!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://example.com" style="height:58px;width:209px;v-text-anchor:middle;" arcsize="0%" strokeweight="0.75pt" strokecolor="#b23ab6" fillcolor="#b23ab6">
      <w:anchorlock/>
      <v:textbox inset="0px,0px,0px,0px">
      <center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px">
      <![endif]--><a href="http://example.com" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#b23ab6;border-radius:0px;width:auto;border-top:1px solid transparent;font-weight:undefined;border-right:1px solid transparent;border-bottom:1px solid transparent;border-left:1px solid transparent;padding-top:10px;padding-bottom:10px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:30px;padding-right:30px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;">Login to my account</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #07071f;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #060e21; color: #000000; width: 650px; margin: 0 auto;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="social_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:15px;text-align:center;">
                                      <div class="alignment" align="center">
                                        <table class="social-table" width="144px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
                                          <tr>
                                            <td style="padding:0 2px 0 2px;"><a href="https://www.facebook.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/facebook@2x.png" width="32" height="32" alt="Facebook" title="facebook" style="display: block; height: auto; border: 0;"></a></td>
                                            <td style="padding:0 2px 0 2px;"><a href="https://www.twitter.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/twitter@2x.png" width="32" height="32" alt="Twitter" title="twitter" style="display: block; height: auto; border: 0;"></a></td>
                                            <td style="padding:0 2px 0 2px;"><a href="https://www.linkedin.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/linkedin@2x.png" width="32" height="32" alt="Linkedin" title="linkedin" style="display: block; height: auto; border: 0;"></a></td>
                                            <td style="padding:0 2px 0 2px;"><a href="https://www.instagram.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/instagram@2x.png" width="32" height="32" alt="Instagram" title="instagram" style="display: block; height: auto; border: 0;"></a></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-left:10px;padding-right:10px;">
                                      <div style="color:#393d47;font-family:'Oswald',Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;line-height:120%;text-align:center;mso-line-height-alt:16.8px;">
                                        <p style="margin: 0; word-break: break-word;"><span style="color:#ffffff;">Changed your mind? <a href="http://www.example.com" target="_blank" style="text-decoration: underline; color: #ffffff;" rel="noopener">Unsubscribe</a></span></p>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:5px;">
                                      <div style="color:#393d47;font-family:'Oswald',Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:14px;line-height:120%;text-align:center;mso-line-height-alt:16.8px;">
                                        <p style="margin: 0; word-break: break-word;"><span style="color: #7de5e5;">Copyright ©. All Rights Reserved.</span></p>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 650px; margin: 0 auto;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                            <!--[if !vml]><!-->
                                            <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]-->
                                              <tr>
                                                <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="http://designedwithbeefree.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Beefree Logo" src="https://d1oco4z2z1fhwp.cloudfront.net/assets/Beefree-logo.png" height="32" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
                                                <td style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: undefined; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="http://designedwithbeefree.com/" target="_blank" style="color: #1e0e4b; text-decoration: none;">Designed with Beefree</a></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table><!-- End -->
      </body>
      
      </html>`
    );
  }

  console.log(response);
}
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "maxspidy5406@gmail.com",
    pass: "yeib qkxq wzxi fdln",
  },
});

export async function sendMail(to: string, subject: string, template: string) {
  const mailOptions = {
    from: "maxspidy5406@gmail.com",
    to,
    subject,
    text: template,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error.message);
    } else {
      return true;
    }
  });
}

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  name: z.string().min(3, { message: "Minimum 3 chracters" }),
});

export type State = {
  errors?: {
    email?: string[];
    name?: string[];
  };
  message?: string | null,
  userFound?: boolean | null,
  email?: string 

};

export async function subscribeUser(prevState: State, formdata: FormData) {
  const validateData = FormSchema.safeParse({
    email: formdata.get("email"),
    name: formdata.get("name"),
  });

  if (!validateData.success) {
    return {
      errors: validateData.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  const { email, name } = validateData.data;

  try {
    const alredyUser = await prisma.user.findUnique({
      where: {
        email,
        AND: {
          subscribed: true,
        }
      },
      
    });

    if (!alredyUser) {
      const user = await prisma.user.create({
        data: {
          email,
          name,
        },
      });

      const token = await prisma.activatToken.create({
        data: {
          token: `${randomUUID()}`.replace(/-/g, ""),
          userId: user.id,
        },
      });

      await sendMail(
        email,
        "Email Verification",
        `http://localhost:3000/api/subscribe/${token.token}`
      );
      return {
        message: null,
        errors: undefined,
        email
      };
    }else{
      return {
        message: "Already User",
        errors: {email: undefined, name: undefined},
        userFound: true,
      }
    }
  } catch (err) {
    console.log(err);
    return {
      message: "Database Under Maintenance",
      errors: undefined,
    };
  } finally {
    prisma.$disconnect();
  }
}
