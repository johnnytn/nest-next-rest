import { getPeriodOfTime } from "@/app/utils/format"
import { IDepartment, IEmployee } from "@/app/types/types"
import { API_PATH } from "@/app/utils/constants"
import EmployeeService from "@/app/services/employee.service"
import DepartmentService from "@/app/services/department.service"

const useEmployeeDetailsController = async ({ params: { id } }: Params) => {
  const employee = await EmployeeService.getById(id)
  // TODO: move to context
  const departments = await DepartmentService.getAll()

  const fullName = `${employee?.firstName} ${employee?.lastName}`

  const hirePeriod = employee?.hireDate
    ? getPeriodOfTime(new Date(employee?.hireDate))
    : "-"

  return {
    employee,
    departments,
    fullName,
    hirePeriod,
  }
}

export default useEmployeeDetailsController
