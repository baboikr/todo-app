type TodoListProps = { todos: { text: string; isDone: boolean }[]; setTodos: React.Dispatch<React.SetStateAction<{ text: string; isDone: boolean }[]>> }; // Define the TodoListProps type
export default function TodoList({todos, setTodos}: TodoListProps) {
	return (
		<div>
			<ul className='mt-8 p-5'>
				{todos.map((item, index) => (
					<li
						key={index}
						className='text-gray-900 flex items-center shadow-xs hover:shadow-md transition-all bg-white p-3 rounded-md space-x-3 mt-3 border-solid border border-gray-200'
					>
						<p
							className='flex-1 cursor-default'
							onClick={() =>
								setTodos(
									todos.map((todo, i) =>
										i === index
											? {
													...todo,
													isDone: !todo.isDone,
											  }
											: todo
									)
								)
							}
						>
							{item.isDone ? (
								<span className='line-through'>
									{item.text}
								</span>
							) : (
								<span>{item.text}</span>
							)}
						</p>
						<button
							className='flex-none rounded-tr-[5px] rounded-br-[5px] text-red-500 cursor-pointer transition-all'
							onClick={() => {
								setTodos(todos.filter((_, i) => i !== index));
							}}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 16 16'
								fill='currentColor'
								className='size-4'
							>
								<path
									fillRule='evenodd'
									d='M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
