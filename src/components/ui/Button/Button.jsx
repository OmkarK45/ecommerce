import clsx from 'clsx'
import Spinner from '../Spinner'
const VARIANTS = {
	primary: {
		base: 'border-transparent text-white focus:outline-none',
		active:
			'bg-yellow-600 hover:bg-yellow-500 focus:shadow-outline-yellow focus:border-yellow-700 active:bg-yellow-700',
		disabled: 'bg-yellow-500 opacity-50',
	},
	default: {
		base: 'border-gray-300',
		active:
			'bg-white text-gray-700 focus:border-gray-300 focus:shadow-outline hover:bg-gray-50 focus:outline-none ',
		disabled: 'bg-gray-100',
	},
	danger: {
		base: 'border-transparent text-white',
		active:
			'bg-red-500 hover:bg-red-600 focus:border-red-600 focus:shadow-outline-red',
		disabled: 'bg-red-400',
	},
	outline: {
		base: 'border border-transparent',
		active:
			'text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
	},
}

const SIZES = {
	sm: 'px-2.5 py-1.5 text-sm',
	md: 'px-3 py-2 text-base',
	lg: 'px-4 py-2 text-lg',
}

export default function Button({
	className,
	variant = 'default',
	size = 'sm',
	fullWidth,
	isLoading,
	loadingText,
	children,
	...props
}) {
	const variantStyles = VARIANTS[variant] || VARIANTS.default
	const sizeStyles = SIZES[size] || SIZES.sm
	return (
		<button
			type="button"
			className={clsx(
				'shadow-sm relative inline-flex items-center justify-center border   rounded transition ease-in-out duration-150 focus:outline-none',
				variantStyles.base,
				sizeStyles,
				props?.disabled && 'cursor-default',
				props?.disabled ? variantStyles.disabled : variantStyles.active,
				fullWidth && 'w-full text-center justify-center',
				className
			)}
			{...props}
		>
			{isLoading && <Spinner className="text-lg" />}
			{isLoading
				? <p className={clsx(loadingText && 'ml-2')}>{loadingText}</p> || (
						<span className="ml-2 opacity-0">{children}</span>
				  )
				: children}
		</button>
	)
}
