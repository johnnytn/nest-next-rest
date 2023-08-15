export interface IDepartment {
  id: string
  name: string
}

export interface IEmployee {
  id: number
  firstName: string
  lastName: string
  phone: string
  hireDate: string
  address: string
  department: Partial<IDepartment>
  // TODO: add to api
  isActive?: boolean
}

export interface IDepartmentLog {
  id: string | number
  date: Date
  department: IDepartment
}
