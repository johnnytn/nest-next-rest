"use client"

import { IDepartment, IDepartmentLog, IEmployee } from "../types/types"
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react"

interface ContextProps {
  employees: IEmployee[]
  setEmployees: Dispatch<SetStateAction<IEmployee[]>>
  departments: IDepartment[]
  setDepartments: Dispatch<SetStateAction<IDepartment[]>>
  departmentLogs: IDepartmentLog[]
  setDepartmentLogs: Dispatch<SetStateAction<IDepartmentLog[]>>
}

const globalContext = createContext<ContextProps>({
  employees: [],
  setEmployees: (): IEmployee[] => [],
  departments: [],
  setDepartments: (): IDepartment[] => [],
  departmentLogs: [],
  setDepartmentLogs: (): IDepartmentLog[] => [],
})

export const GlobalContextProvider = ({ children }: any) => {
  const [employees, setEmployees] = useState<IEmployee[] | []>([])
  const [departments, setDepartments] = useState<IDepartment[] | []>([])
  const [departmentLogs, setDepartmentLogs] = useState<IDepartmentLog[] | []>(
    []
  )

  const contextValues = {
    employees,
    departments,
    setEmployees,
    setDepartments,
    departmentLogs,
    setDepartmentLogs,
  }

  return (
    <globalContext.Provider value={contextValues}>
      {children}
    </globalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(globalContext)
