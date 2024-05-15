import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { TodoContext } from "../todoList/TodoList";
import TodoCheckbox from "../todoCheckbox/TodoCheckbox";
import Modal from "../modal/Modal";

const TodoItems = () => {
	const { tasks, deleteTask } = useContext(TodoContext);
	const [checkedItems, setCheckedItems] = useState([]);
	const [showModal, setShowModal] = useState({ id: null, open: false });

	useEffect(() => {
		const savedCheckedItems = JSON.parse(localStorage.getItem("checkedItems"));
		if (savedCheckedItems) {
			setCheckedItems(savedCheckedItems);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
	}, [checkedItems]);

	const onHandler = (id) => {
		setShowModal({ id, open: true });
	};

	const offHandler = () => {
		setShowModal({ open: false });
	};

	const closeDeleteModals = () => {
		deleteTask(showModal.id);
		setCheckedItems(checkedItems.filter((itemId) => itemId !== showModal.id));
		setShowModal({ id: null, open: false });
	};

	const handleCheckboxToggle = (id) => {
		if (checkedItems.includes(id)) {
			setCheckedItems(checkedItems.filter((itemId) => itemId !== id));
		} else {
			setCheckedItems([...checkedItems, id]);
		}
	};

	const completedTasksCount = tasks.filter((task) => checkedItems.includes(task.id)).length;
	const remainingTasksCount = tasks.length - completedTasksCount;

	return (
		<TodoItemsContainer>
			{tasks.map((item) => (
				<TaskContainer key={item.id}>
					<TaskName isChecked={checkedItems.includes(item.id)}>
						{item.task}
					</TaskName>
					<CheckboxContainer>
						<TodoCheckbox
							type="checkbox"
							onChange={() => handleCheckboxToggle(item.id)}
							checked={checkedItems.includes(item.id)}
						/>
						<DeleteButton onClick={() => onHandler(item.id)}>
							Удалить
						</DeleteButton>
					</CheckboxContainer>
				</TaskContainer>
			))}
			<CountContainer>
				<CompletedCount>Выполнено: {completedTasksCount}</CompletedCount>
				<RemainingCount>Не Выполенно: {remainingTasksCount}</RemainingCount>
			</CountContainer>
			{showModal.open && (
				<Modal
					onClick={() => closeDeleteModals()}
					closeModal={() => offHandler()}>
					Вы действительно хотите удалить задачу?
				</Modal>
			)}
		</TodoItemsContainer>
	);
};

export default TodoItems;

const TodoItemsContainer = styled.div`
	text-align: center;
	border: 1px solid purple;
	width: 700px;
	margin: 0 auto;
	margin-top: 30px;
	background-color: #8000804f;
`;

const TaskContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 250px;
`;

const TaskName = styled.p`
	color: ${({ isChecked }) => (isChecked ? "black" : "white")};
	font-size: 25px;
	font-weight: 600;
	text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
	margin-top: 10px;
`;

const CheckboxContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	margin-top: 10px;
`;

const DeleteButton = styled.button`
	background-color: red;
	width: 90px;
	height: 25px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	color: white;
	transition: 0.3s;
	&:active {
		background-color: gray;
	}
`;

const CountContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

const CompletedCount = styled.p`
	color: #03ff03;
	font-size: 18px;
	font-weight: 500;
	margin-right: 20px;
`;

const RemainingCount = styled.p`
	color: red;
	font-size: 18px;
	font-weight: 500;
`;
