import { useMemo } from "react"
import { IEmployeeCard } from "./types"
import { formatDate, getPeriodOfTime } from "@/app/utils/format"

const useEmployeeCardController = ({ employee }: IEmployeeCard) => {
  const fullName = useMemo(
    () => `${employee.firstName} ${employee.lastName}`,
    [employee]
  )

  const hireDate = useMemo(() => {
    if (!employee.hireDate) return "-"

    const period = getPeriodOfTime(new Date(employee.hireDate))
    return `${formatDate(employee.hireDate)} (${period})`
  }, [employee])

  /* const handleViewDetails = () => {
    console.log(employee.id)
  } */
  return { employee, fullName, hireDate }
}

export default useEmployeeCardController
