interface IButton {
  bgColor: string
  textColor?: string
  label: string
  handleOnClick?: () => void
}
const Button = ({
  bgColor,
  textColor = "text-white",
  label,
  handleOnClick,
}: IButton) => (
  <button
    className={`px-4 py-4 backdrop-blur-2xl ${textColor}
    shadow-lg rounded-xl border ${bgColor} hover:bg-opacity-75
    transform transition ease-in-out duration-300 hover:scale-105`}
    onClick={handleOnClick}
  >
    <span className="font-semibold text-lg leading-6">{label}</span>
  </button>
)
export default Button
