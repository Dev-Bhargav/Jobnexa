import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface htmlDataType {
  level?: Number;
  withHeading?: boolean;
  content?: Array<Array<string>> | Object;
  text?: string;
  file?: Array<Object>;
}

type htmlObjectType = {
  id: string;
  type: string;
  data: htmlDataType;
};

export function convertHtml(htmlarray: Array<htmlObjectType>) {
  //! Make Proper Error

  let newHtmlArray = htmlarray.map((html: any) => {
    switch (html.type) {
      case "header":
        if (html.data.level === 2) {
          return `<h2 class="font-bold" style="font-size: 20px">${html.data.text}</h2>`;
        }
        return `<h${html.data.level}>${html.data.text}</h${html.data.level}>`;
      case "paragraph":
        return `<p>${html.data.text}</p>`;
      case "table":
        if (html.data.withHeadings) {
        }
        //! Make Proper Error
        const content = html.data.content;
        const table = `<table class="w-full border-collapse border border-slate-400 bg-white text-md shadow-sm">
            <tbody >
            ${content
              .map((row: Array<string>, rowIdx: Number) => {
                const rows = `<tr>
               ${row
                 .map(
                   (values) =>
                     `<td key=${rowIdx} class="border py-2 px-3 text-[#262626] border-slate-300" >${values}</td>`
                 )
                 .join(" ")}
               </tr>
              `;
                return rows;
              })
              .join(" ")}
            </tbody>
          </table>`;
        return table;

      case "image":
        return `<img src="${html.data.file.url}"  />`;
      case "list":
        const list = html.data.items.map((listitem:string) =>{
          return `<ul class="ml-3">
            <li class="mx-4" style="list-style-type: disc">${listitem}</li>
          </ul>`
        })
        return list
      default:
        return "work";
    }
  });

  return newHtmlArray;
}