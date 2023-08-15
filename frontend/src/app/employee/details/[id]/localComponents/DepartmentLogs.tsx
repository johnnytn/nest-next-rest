"use client"

import { useGlobalContext } from "@/app/Context/store"

const DepartmentLogs = () => {
  const { departmentLogs } = useGlobalContext()

  if (!departmentLogs.length) return null

  return (
    <div className="flex flex-col mt-10">
      <div className="space-y-2">
        <div>
          <span className="font-semibold text-xl">Department History</span>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
              </tr>
            </thead>
            <tbody>
              {departmentLogs?.map((log) => (
                <tr
                  className=" border-b bg-gray-800 border-gray-700"
                  key={log.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    {log.date.toDateString()}
                  </th>
                  <td className="px-6 py-4">{log.department.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DepartmentLogs
