import { ISelect } from "./types"

const Select = ({ options, name, id, value, handleOnChange }: ISelect) => {
  return (
    <>
      <select
        className="p-3 rounded-lg shadow-lg"
        name={name}
        id={id}
        onChange={(e) => handleOnChange(e.target.value)}
        defaultValue={value}
      >
        <option value="">Select Department</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  )
}

export default Select
