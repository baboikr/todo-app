type ButtonProps = { type: 'button' | 'submit' | 'reset'; text: string; onClick?: any; disabled?: boolean; icon?: React.ReactNode };
export default function Button({type, text, onClick, disabled, icon}: ButtonProps) {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className='flex justify-center items-center w-full h-[40px] bg-green-600 text-white rounded-md text-sm/6 font-semibold focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50 hover:bg-green-700 cursor-pointer disabled:opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed'
		>
			{icon}
			{text}
		</button>
	);
}
