import {useState} from "react";
import Input from "./Input";
import Button from "./Button";
import TodoList from "./TodoList";
type Todo = { text: string; isDone: boolean }; // Define the Todo type

export default function Todo() {
	const [todo, setTodo] = useState({text: "", isDone: false}); // Initialize the todo
	const [todos, setTodos] = useState<Todo[]>([]);	// Initialize the todos
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
				//onSubmit={} // Handle the form submission
				className='space-y-6 p-14 sm:p-5 shadow-md bg-white rounded-md mt-3'
			>
				<Input // Input component
					label='What needs to be done?' // Label
					id='todo'
					name='Todo'
					type='text'
					placeholder='Enter a todo'
					value={todo.text}
					onChange={(e) =>
						setTodo({
							...todo,
							text: e.target.value,
						})
					}
				/>
				<Button // Button component
					type='submit'
					text='Add Todo'
					disabled={!todo.text}
					onClick={handleSubmit} // Handle the button click
					icon={
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 16 16'
							fill='currentColor'
							className='size-4'
						>
							<path d='M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z' />
						</svg>
					}
				/>
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
				<TodoList todos={todos} setTodos={setTodos} />
			</div>
		</div>
	);
}
