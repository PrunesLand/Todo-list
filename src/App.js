import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import React, { useState } from "react";

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className='App'>
			<header>
				<h1>Pran's Todo List</h1>
				<p>Will continue June 1st</p>
			</header>
			<Form todos={todos} setTodos={setTodos} setInputText={setInputText} />
			<TodoList />
		</div>
	);
}

export default App;
