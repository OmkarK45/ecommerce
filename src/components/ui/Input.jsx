import clsx from 'clsx'

export function FormError({ error }) {
	return (
		<p className="mt-2 text-sm text-red-600" id="email-error">
			{error}
		</p>
	)
}

export default function FormInput({
	name,
	type,
	placeholder,
	onChange,
	className,
	error,
	value,
	required,
	label,
	...props
}) {
	return (
		<div>
			<label htmlFor={name} className="block text-sm font-medium ">
				{label}
			</label>
			<div className="mt-1">
				<input
					id={name}
					name={name}
					onChange={onChange}
					type={type}
					value={value}
					required={required}
					placeholder={placeholder}
					className={clsx(
						'relative block w-full px-3 py-2 text-black placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm',
						className
					)}
					{...props}
				/>
				{error && <FormError error={error} />}
			</div>
		</div>
	)
}
