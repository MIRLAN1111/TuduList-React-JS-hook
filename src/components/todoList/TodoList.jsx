import React, { useState, useReducer, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import TodoItems from "../todoItems/TodoItems";
import AddButton from "../addButton/AddButton";
import { TodoInput } from "../todoInput/TodoInput";

const TodoContext = React.createContext();

const initialState = {
	tasks: [],
};

const todoReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TASK":
			return {
				tasks: [...state.tasks, action.payload],
			};
		case "DELETE_TASK":
			return {
				tasks: state.tasks.filter((task) => task.id !== action.payload),
			};
		case "TOGGLE_TASK":
			return {
				tasks: state.tasks.map((task) =>
					task.id === action.payload
						? { ...task, completed: !task.completed }
						: task
				),
			};
		case "SET_TASKS":
			return {
				tasks: action.payload,
			};
		default:
			return state;
	}
};

const TodoList = () => {
	const [state, dispatch] = useReducer(todoReducer, initialState);
	const [newTask, setNewTask] = useState("");

	useEffect(() => {
		const savedTasks = JSON.parse(localStorage.getItem("tasks"));
		if (savedTasks) {
			dispatch({ type: "SET_TASKS", payload: savedTasks });
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(state.tasks));
	}, [state.tasks]);

	const addTask = () => {
		if (newTask.trim() !== "") {
			toast.success("Добавлено!");
			dispatch({
				type: "ADD_TASK",
				payload: { id: Date.now(), task: newTask, completed: false },
			});
			setNewTask("");
		}
	};

	const deleteTask = (id) => {
		toast.error("🪓 Удалено");
		dispatch({ type: "DELETE_TASK", payload: id });
	};

	const toggleTask = (id) => {
		dispatch({ type: "TOGGLE_TASK", payload: id });
	};

	return (
		<TodoContext.Provider
			value={{ tasks: state.tasks, deleteTask, toggleTask }}>
			<div>
				<TodoStyled>
					<TodoInput newTask={newTask} setNewTask={setNewTask} />
					<AddButton addTask={addTask} />
				</TodoStyled>

				<TodoItems />

				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
			</div>
		</TodoContext.Provider>
	);
};

const TodoStyled = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
`;

export { TodoList, TodoContext };
