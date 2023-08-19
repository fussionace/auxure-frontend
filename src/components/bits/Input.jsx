const Input = ({ placeholder, label, type, ...props }) => {
    return (
        <div className=" flex flex-col gap-[16px] w-full">
            <label htmlFor="" className=" font-medium text-[16px]">{label}</label>
            <input type={type} placeholder={placeholder} {...props}
                className=" py-[12px] px-[16px] w-full"
            />
        </div>
    )
}

export default Input