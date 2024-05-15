import React from "react";
import styled from "styled-components";

export const TodoInput = ({ newTask, setNewTask }) => {
	return (
		<div className="main">
			<InputStyled
				className="input"
				type="text"
				value={newTask}
				onChange={(event) => setNewTask(event.target.value)}
				placeholder="пишите что нибудь"
				required
			/>

		</div>
	);
};

const InputStyled = styled.input`
	width: 250px;
	height: 30px;
	border-radius: 10px;
	background-color: #eee6e6ae;
	color: black;
	font-size: 20px;
	margin-top: 20px;
	border: none;
	border-bottom: solid gray 1px;
	outline: none;
	padding: 10px;
	transition: 0.2s;
`;

export default TodoInput;
