import EmployeeCard from "./localComponents/EmployeeCard"
import EmployeeService from "@/app/services/employee.service"

// Async Component responsable for fetching and rendering
const EmployeeList = async () => {
  const employees = await EmployeeService.getAll()

  return (
    <>
      {!employees.length ? (
        /* TODO: create component */
        <div>Loading...</div>
      ) : (
        employees?.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))
      )}
    </>
  )
}

export default EmployeeList
