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
  let newHtmlArray = htmlarray.map((html) => {
    switch (html.type) {
      case "header":
        if(html.data.level === 2){
          return `<h2 class="text-xl font-bold">${html.data.text}</h2>`
        }
        return `<h${html.data.level}>${html.data.text}</h${html.data.level}>`;
      case "paragraph":
        return `<p>${html.data.text}</p>`;
      case "table":
        let headers = html.data.content[0];
        headers = headers.filter((value: string) => value !== "");

        const content = html.data.content;
        content.shift();

        const table = `<table class="border [&_td]:w-96 [&_td]:leading-5 [&_td]:px-4 [&_td]:py-2 max-w-full">
          <thead>
            <tr>
              ${headers
                .map(
                  (head: string) =>
                    `<th class="py-2 px-4 text-start text-lg font-semibold">${head}</th>`
                )
                .join("")}
            </tr>
          </thead>
          <tbody>
          ${content
            .map((row: Array<string>, rowIdx: Number) => {
              const rows = `<tr class="border">
             ${row
               .map((headers) => `<td key=${rowIdx} >${headers}</td>`)
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
      default:
        return "work";
    }
  });

  return newHtmlArray;
}
