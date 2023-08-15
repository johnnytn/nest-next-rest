import { format, parseISO } from "date-fns"

export const formatDate = (dateString: string) => {
  const date = parseISO(dateString)
  return format(date, "LLLL d, yyyy")
}

export const getPeriodOfTime = (creationDate: Date): string => {
  const currentDate = new Date()
  const durationInMilliseconds = currentDate.getTime() - creationDate.getTime()

  // Helper function to format time units
  const formatTimeUnit = (unit: number, unitName: string): string => {
    return unit > 0
      ? `${unit} ${unitName}${unit > 1 ? "s" : ""}`
      : `0 ${unitName}`
  }

  // Calculate duration in different time units
  const seconds = Math.floor(durationInMilliseconds / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(days / 365)
  const displayYear = years ? `${formatTimeUnit(years, "y")} - ` : ""
  const displayMonth = months ? `${formatTimeUnit(months % 12, "m")} - ` : ""
  const displayDays = days ? `${formatTimeUnit(days % 30, "d")}` : ""
  return `${displayYear}${displayMonth}${displayDays}`
}
