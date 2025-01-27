export default function Input({
	label,
	id,
	name,
	type,
	placeholder,
	value,
	onChange,
}) {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className='w-full h-[40px] border border-gray-300 rounded-md px-3 py-1.5 text-sm/6 text-gray-900 focus:ring-1 focus:ring-green-600 focus:outline-none focus:ring-opacity-50'
			/>
		</div>
	);
}
