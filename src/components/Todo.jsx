import {useState} from "react";

export default function Todo() {
	const [todo, setTodo] = useState({text: "", isDone: false}); // Initialize the todo
	const [todos, setTodos] = useState([]); // Initialize the todos
	function handleSubmit(e) {
		// Handle the form submission
		e.preventDefault(); // Prevent the default form submission
		if (!todo.text) {
			// If the todo is empty
			alert("Please enter a todo"); // Alert the user
		} else {
			setTodos([todo, ...todos]); // Add the todo to the todos
			setTodo({text: "", isDone: false}); // Clear the input
		}
		console.log(todos.map((todo) => todo)); // Log the todos
	}
	return (
		<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm relative'>
			<form
				action='#'
				method='POST'
				onSubmit={handleSubmit} // Handle the form submission
				className='space-y-6 p-14 sm:p-5 shadow-md bg-white rounded-md mt-3'
			>
				<label
					htmlFor='todo'
					className='block text-sm/6 font-medium text-gray-900'
				>
					What to do, huh? type it!
				</label>
				<input
					id='todo'
					type='text'
					placeholder='Add todo'
					value={todo.text}
					onChange={(e) =>
						setTodo({text: e.target.value, isDone: false})
					}
					className='block w-full h-[40px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 transition-all'
				/>
				<button
					type='submit'
					className='flex w-full h-[40px] justify-center items-center rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer transition-all'
				>
					Add
				</button>
			</form>
			<div className='mt-2'>
				<div className='flex items-start justify-between p-5 bg-white border-b border-gray-200'>
					<h2>
						Total:
						<br />
						<span className='text-2xl font-bold text-gray-900'>
							{todos.length}
						</span>
					</h2>
					<h2>
						Done: <br />
						<span className='text-2xl font-bold text-green-600'>
							{todos.filter((todo) => todo.isDone).length}
						</span>
					</h2>
				</div>
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
									setTodos(
										todos.filter((_, i) => i !== index)
									);
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
		</div>
	);
}
