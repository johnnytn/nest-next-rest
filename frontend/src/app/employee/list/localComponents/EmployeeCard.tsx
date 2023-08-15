import Button from "@/app/components/Button"
import useEmployeeCardController from "../localComponents/controller"
import { IEmployeeCard } from "./types"
import Link from "next/link"

const EmployeeCard = (props: IEmployeeCard) => {
  const { fullName, employee, hireDate } = useEmployeeCardController(props)
  return (
    <>
      <div
        className="bg-white border-slate-100 
          border-b rounded-xl my-4
          p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8"
      >
        <div className="flex items-center space-x-4">
          <div className="h-20 w-20">
            <div className="h-full w-full bg-teal-400"></div>
          </div>
          <div className="min-w-0 flex-auto space-y-1">
            <p className="leading-6">
              <span title="Episode" className="text-black font-semibold">
                {fullName}
              </span>{" "}
              <span className="text-gray-500">
                ({employee.department?.name || "No department"})
              </span>
            </p>
            <h2 className="text-slate-700 text-sm leading-6 truncate">
              Hire Date
            </h2>
            <p className="text-slate-400">{hireDate}</p>
          </div>
          <div>
            <Link href={`/employee/details/${employee.id}`}>
              <Button bgColor="bg-green-400" label="View Details" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployeeCard
