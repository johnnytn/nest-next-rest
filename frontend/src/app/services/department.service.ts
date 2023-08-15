import { IDepartment } from "../types/types"
import { API_PATH } from "../utils/constants"

export default class DepartmentService {
  static async getAll(): Promise<IDepartment[]> {
    try {
      const response = await fetch(`${API_PATH}/department`, {
        next: {
          revalidate: 30,
        },
      })
      console.log({ response })

      if (!response.ok) {
        console.log("Fail to fetch Department")
        return []
      }
      console.log({ response })

      return response.json()
    } catch (error) {
      console.log({ error })
      return []
    }
  }
}
