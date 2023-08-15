// "use client"
/* Need to investigate how to enable CORS for client side.
  Until then I cant' use context else where.

  Desired function:

  const { employees, departments, setEmployees, setDepartments } = useGlobalContext()
  const fetchEmployees  = async ()=> {
  const _employees = await EmployeeService.getAll()
  setEmployees(_employees)
}

  const fetchDepartment  = async ()=> {  
  const _departments = await DepartmentService.getAll()    
  setDepartments(_departments)
}  

 */

import EmployeeList from "./EmployeeList"

export default function EmployeeListPage() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="pt-5">
        <EmployeeList />
      </div>
    </main>
  )
}
