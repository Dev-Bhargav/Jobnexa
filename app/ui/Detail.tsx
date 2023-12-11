import React from "react";

export default function Detail() {
  return (
    <div className="flex flex-col gap-5">
      <table className="[&_td]:w-96 [&_td]:leading-5 [&_td]:px-4 [&_td]:py-2 max-w-full">
        <thead>
          <tr>
            <th colSpan={2} className="py-2 px-4 border text-start text-xl">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-x">
            <td className="font-medium">Post</td>
            <td>SBI Clerk</td>
          </tr>
          <tr className="border-x">
            <td className="font-medium">Date</td>
            <td>17-11-2023</td>
          </tr>
          <tr className="border-x border-b">
            <td className="font-medium">Total Vacancy </td>
            <td>100</td>
          </tr>
        </tbody>
      </table>

      <table className="[&_td]:w-96 [&_td]:leading-5 [&_td]:px-4 [&_td]:py-2 max-w-full">
        <thead>
          <tr>
            <th colSpan={2} className="py-2 px-4 border text-start text-xl">
              Application Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-x">
            <td className="font-medium">For General/ OBC/ EWS</td>
            <td>Rs. 750/- </td>
          </tr>
          <tr className="border-x">
            <td className="font-medium">For SC/ ST/ PwBD/ ESM/DESM</td>
            <td>Nil</td>
          </tr>
          <tr className="border-x border-b">
            <td className="font-medium">Payment Mode </td>
            <td>
              Through Online by using Debit card/ Credit card/ Internet Banking
            </td>
          </tr>
        </tbody>
      </table>

      <table className="[&_td]:w-96 [&_td]:leading-5 [&_td]:px-4 [&_td]:py-2 max-w-full">
        <thead>
          <tr>
            <th colSpan={2} className="py-2 px-4 border text-start text-xl">
              Important Dates
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-x">
            <td className="font-medium">
              Starting Date for Apply Online & Payment of Fee
            </td>
            <td>17-11-2023</td>
          </tr>
          <tr className="border-x">
            <td className="font-medium">
              Last Date to Apply Online & Payment of Fee
            </td>
            <td>07-12-2023</td>
          </tr>
          <tr className="border-x">
            <td className="font-medium">Date of Prelims Exam (Tentative) </td>
            <td>January 2024</td>
          </tr>
          <tr className="border-x border-b">
            <td className="font-medium"> February 2024</td>
            <td>January 2024</td>
          </tr>
        </tbody>
      </table>

      <table className="[&_td]:w-96 [&_td]:leading-5 [&_td]:px-4 [&_td]:py-2 max-w-full">
        <thead>
          <tr>
            <th colSpan={2} className="py-2 px-4 border text-start text-xl">
              Age Limit
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-x">
            <td className="font-medium">Minimum Age Limit</td>
            <td> 20 years</td>
          </tr>
          <tr className="border-x">
            <td className="font-medium">Maximum Age Limit</td>
            <td>28 years</td>
          </tr>
          <tr className="border-x border-b">
            <td className="font-medium">Date of Prelims Exam (Tentative) </td>
            <td>January 2024</td>
          </tr>
        </tbody>
      </table>

      <table className="[&_td]:w-96 [&_td]:leading-5 [&_td]:px-4 [&_td]:py-2 max-w-full">
        <thead>
          <tr>
            <th colSpan={2} className="py-2 px-4 border text-start text-xl">
              Important Links
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-x">
            <td className="font-medium">Apply Online</td>
            <td>Click Here</td>
          </tr>
          <tr className="border-x">
            <td className="font-medium">Notification</td>
            <td>Click Here</td>
          </tr>
          <tr className="border-x border-b">
            <td className="font-medium">Exam Pattern</td>
            <td>Click Here</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
