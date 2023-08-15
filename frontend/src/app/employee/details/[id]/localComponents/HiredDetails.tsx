"use client"

import EmployeeService from "@/app/services/employee.service"
import { IEmployee } from "@/app/types/types"
import { formatDate } from "@/app/utils/format"
import { useMemo, useState } from "react"

interface IHiredDetails {
  employee: IEmployee
  hirePeriod: string
}

const HiredDetails = ({ employee, hirePeriod }: IHiredDetails) => {
  const activeButtonLabel = useMemo(
    () => (employee?.isActive ? "Deactivate" : "Activate"),
    [employee]
  )

  const activeButtonClass = useMemo(() => {
    let bgColor = employee?.isActive ? "bg-green-500" : "bg-red-500"

    return `${bgColor} mt-2 px-3 py-2 rounded-xl shadow-lg`
  }, [employee])

  const handleChangeEmployeeStatus = () => {
    // TODO:  implement
    /* const response = await EmployeeService.updateStatus(
      employee.id,
      !employee.isActive
    ) */
  }
  return (
    <div>
      <div>
        <span className="font-semibold text-slate-600">Hire Date</span>
      </div>
      <div>
        <span className="text-slate-500">{formatDate(employee?.hireDate)}</span>
      </div>
      <div>
        <span className="text-slate-500"> {hirePeriod}</span>
      </div>
      <div>
        <button
          className={activeButtonClass}
          onClick={handleChangeEmployeeStatus}
        >
          <span className="text-white">{activeButtonLabel}</span>
        </button>
      </div>
    </div>
  )
}

export default HiredDetails
