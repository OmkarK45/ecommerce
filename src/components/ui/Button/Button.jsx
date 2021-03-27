import clsx from "clsx"

const VARIANTS = {
  primary: {
    base: "border-transparent text-white focus:outline-none",
    active:
      "bg-indigo-600 hover:bg-indigo-500 focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700",
    disabled: "bg-indigo-400",
  },
  default: {
    base: "border-gray-300",
    active:
      "bg-white text-gray-700 hover:text-gray-500 focus:border-blue-300 focus:shadow-outline",
    disabled: "bg-gray-100",
  },
  danger: {
    base: "border-transparent text-white",
    active:
      "bg-red-600 hover:bg-red-500 focus:border-red-700 focus:shadow-outline-red",
    disabled: "bg-red-400",
  },
}

export default function Button({
  className,
  variant = "default",
  fullWidth,
  ...props
}) {
  const variantStyles = VARIANTS[variant] || VARIANTS.default
  return (
    <button
      type="button"
      className={clsx(
        "shadow-sm relative inline-flex items-center px-4 py-2 border text-base leading-6 rounded-md transition ease-in-out duration-150 focus:outline-none",
        variantStyles.base,
        props?.disabled && "cursor-default",
        props?.disabled ? variantStyles.disabled : variantStyles.active,
        fullWidth && "w-full text-center justify-center",
        className
      )}
      {...props}
    />
  )
}
