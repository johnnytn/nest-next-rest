"use client"

import Select from "@/app/components/Select"
import { IDepartment, IEmployee } from "@/app/types/types"
import { useState } from "react"

import { useGlobalContext } from "@/app/Context/store"

interface ISelectDepartment {
  departments: IDepartment[]
  employee: IEmployee
}

const SelectDepartment = ({ departments, employee }: ISelectDepartment) => {
  /* TODO: just showing context working */
  const { setDepartments, departmentLogs, setDepartmentLogs } =
    useGlobalContext()

  setDepartments(departments)
  /*  */

  const [currentDepartmentId, setCurrentDepartmentId] = useState<string>(
    employee?.department?.id || ""
  )

  const handleChangeDepartment = (value: any) => setCurrentDepartmentId(value)

  const handleUpdateDepartment = () => {
    const selectedDepartment = departments.find(
      (dep) => `${dep.id}` === currentDepartmentId
    )

    if (selectedDepartment) {
      // Example of logs been seent to api
      setDepartmentLogs((logs) => [
        ...logs,
        {
          date: new Date(),
          id: Math.random() * 100,
          department: selectedDepartment,
        },
      ])
    }

    // TODO: check cors in client components
    /* try {      
      const response = await EmployeeService.updateDepartment(employee.id, currentDepartmentId)
    } catch (error) {
      console.log({error})
    } */
  }

  return (
    <div className="flex flex-col mt-4">
      <span className="font-semibold text-slate-600">Update Department</span>
      <div className="flex flex-auto items-center space-x-2 mt-1">
        <Select
          options={departments}
          value={currentDepartmentId}
          handleOnChange={handleChangeDepartment}
        />

        <button
          className="bg-green-500 px-4 py-2.5 rounded-xl shadow-lg"
          onClick={handleUpdateDepartment}
        >
          <span className="text-white">Update</span>
        </button>
      </div>
    </div>
  )
}

export default SelectDepartment
