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
				className='space-y-6 p-14 shadow-md bg-white rounded-md mt-3'
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
					className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 transition-all'
				/>
				<button
					type='submit'
					className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer transition-all'
				>
					Add
				</button>
			</form>
			<div className='mt-2'>
				<div className='flex items-start justify-between p-3 bg-white border-b border-gray-200'>
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
				<ul className='mt-8'>
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
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='size-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
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
