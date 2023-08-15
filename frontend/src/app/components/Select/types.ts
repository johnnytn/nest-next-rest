import { IDepartment } from "@/app/types/types"

export interface ISelect {
  options: IDepartment[]
  name?: string
  id?: string
  value: string
  handleOnChange: (value: string | number) => void
}
