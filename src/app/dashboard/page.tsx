import Link from "next/link";
import { listForms } from "../server/form";
import mongoose from "mongoose";
export default async function page() {
  const data: any = await listForms();
  return (
    <div>
      <div className="flex bg-white p-4">
        <h1 className="mx-auto font-bold text-3xl">Forms</h1>
      </div>
      <div>
        <table className="border-separate border-spacing-x-8 border-spacing-y-4 w-full">
          <thead>
            <tr className="">
              <th className="p-2" />
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Description</th>
              <th className="p-2 flex flex-col items-end">
                <Link
                  href={`/edit/${new mongoose.Types.ObjectId()}`}
                  className="text-2xl font-extralight border rounded-lg border-blue-600 px-2 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  +
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length != 0 ? (
              data.map((q: any, i: any) => {
                return (
                  <tr key={q._id}>
                    <td>{i + 1}.</td>
                    <td className="p-2">{q.name ? q.name : "No name"}</td>
                    <td className="p-2">
                      {q.description ? q.description : "No description"}
                    </td>
                    <td className="p-2 flex space-x-4">
                      <Link
                        href={`/edit/${q._id}`}
                        className="px-4 py-2 bg-purple-700 focus:bg-purple-500 text-white focus:text-slate-100 font-medium rounded-xl"
                      >
                        Edit
                      </Link>
                      <Link
                        href={`/form/${q._id}`}
                        className="px-4 py-2 bg-blue-700 focus:bg-blue-500 text-white focus:text-slate-100 font-medium rounded-xl"
                      >
                        Visit
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4} className="text-center p-2">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
