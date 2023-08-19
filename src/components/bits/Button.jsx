
const Button = ({ label, type, variant = 'primary', classes }) => {

    const buttonType = () => {
        if (variant === "primary") {
            return "bg-accent-1"
        } else if (variant === "secondary") {
            return "bg-gray"
        }
    }
    const mode = buttonType()
    return (
        <button type={type} 
        className={`${mode} hover:cursor-pointer w-full py-[16px] px-[23px] rounded-[4px] text-[16px] font-semibold ${classes}`}>
            {label}
        </button>
    )
}

export default Button