import clsx from "clsx"

const VARIANTS = {
  primary: {
    base: "border-transparent text-white focus:outline-none",
    active:
      "bg-yellow-600 hover:bg-yellow-500 focus:shadow-outline-yellow focus:border-yellow-700 active:bg-yellow-700",
    disabled: "bg-yellow-400",
  },
  default: {
    base: "border-gray-300",
    active:
      "bg-white text-gray-700 focus:border-gray-300 focus:shadow-outline hover:bg-gray-50 focus:outline-none ",
    disabled: "bg-gray-100",
  },
  danger: {
    base: "border-transparent text-white",
    active:
      "bg-red-500 hover:bg-red-400 focus:border-red-600 focus:shadow-outline-red",
    disabled: "bg-red-400",
  },
}

const SIZES = {
  sm: "px-2.5 py-1.5 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-2 text-lg",
}

export default function Button({
  className,
  variant = "default",
  size = "sm",
  fullWidth,
  ...props
}) {
  const variantStyles = VARIANTS[variant] || VARIANTS.default
  const sizeStyles = SIZES[size] || SIZES.sm
  return (
    <button
      type="button"
      className={clsx(
        "shadow-sm relative inline-flex items-center justify-center border   rounded transition ease-in-out duration-150 focus:outline-none",
        variantStyles.base,
        sizeStyles,
        props?.disabled && "cursor-default",
        props?.disabled ? variantStyles.disabled : variantStyles.active,
        fullWidth && "w-full text-center justify-center",
        className
      )}
      {...props}
    />
  )
}
