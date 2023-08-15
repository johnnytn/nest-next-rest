import { IEmployee } from "../types/types"
import { API_PATH } from "../utils/constants"

export default class EmployeeService {
  static async getAll(): Promise<IEmployee[]> {
    try {
      const response = await fetch(`${API_PATH}/employee`, {
        next: {
          revalidate: 30,
        },
      })
      console.log({ response })

      if (!response.ok) {
        // throw new Error("Fail to fetch Employees")
        console.log("Fail to fetch Employees")
        return []
      }
      console.log({ response })

      return response.json()
    } catch (error) {
      console.log({ error })
      return []
    }
  }

  static async getById(id: string | number): Promise<IEmployee | null> {
    try {
      const response = await fetch(`${API_PATH}/employee/${id}`, {
        cache: "no-cache",
      })

      if (!response.ok) {
        // throw new Error("Fail to fetch Employees")
        console.log("Fail to fetch Employees")
        return null
      }

      return response.json()
    } catch (error) {
      // TODO: implement error handling
      // throw new Error("Fail to fetch Employees")
      console.log({ error })
      return null
    }
  }

  static async updateDepartment(
    id: string | number,
    departmentId: string | number
  ): Promise<IEmployee | null> {
    return this.doUpdate(id, { department: { id: `${departmentId}` } })
  }

  static async updateStatus(
    id: string | number,
    isActive: boolean
  ): Promise<IEmployee | null> {
    return this.doUpdate(id, { isActive })
  }

  static async doUpdate(
    id: string | number,
    body: Partial<IEmployee>
  ): Promise<IEmployee | null> {
    try {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
      const response = await fetch(`${API_PATH}/employee/${id}`, requestOptions)

      if (!response.ok) {
        // throw new Error("Fail to fetch Employees")
        console.log("Fail to update Employee")
        return null
      }

      return response.json()
    } catch (error) {
      // TODO: implement error handling
      // throw new Error("Fail to fetch Employees")
      console.log({ error })
      return null
    }
  }
}
