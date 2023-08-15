import useEmployeeDetailsController from "./controller"
import SelectDepartment from "./localComponents/SelectDepartment"
import HiredDetails from "./localComponents/HiredDetails"
import DepartmentLogs from "./localComponents/DepartmentLogs"

export default async function EmployeeDetailsPage(props: Params) {
  const { employee, departments, fullName, hirePeriod } =
    await useEmployeeDetailsController(props)

  const DataRow = ({ field, value }: any) => (
    <div className="flex flex-auto space-x-4">
      <span className="font-semibold text-slate-600">{field}:</span>
      <span className="text-slate-500">{value}</span>
    </div>
  )

  if (!employee) {
    return <main className=" flex min-h-screen flex-col p-24">Loading...</main>
  }

  return (
    <main className=" flex min-h-screen flex-col p-24">
      <div className="pt-5">
        <div className="flex">
          <div>
            {/* //photo */}
            <div className="h-60 w-60">
              <div className="h-full w-full bg-teal-400"></div>
            </div>
          </div>
          <div className="flex-auto pl-4 py-2">
            {/* dettails */}
            <span className="font-bold text-xl">{fullName}</span>
            <div className="mt-6">
              <DataRow field="Employee ID" value={employee.id} />
              <DataRow field="Department" value={employee?.department?.name} />
              <DataRow field="Telephone" value={employee.phone} />
              <DataRow field="Address" value={employee.address} />
            </div>
            <SelectDepartment departments={departments} employee={employee} />
          </div>
          <HiredDetails employee={employee} hirePeriod={hirePeriod} />
        </div>
        <DepartmentLogs />
      </div>
    </main>
  )
}
