import React from "react";
import styled from "styled-components";
import video from "./assets/video/mixkit-pink-sunset-seen-from-a-plane-window-4204-medium.mp4";
import { TodoList } from "./components/todoList/TodoList";

const App = () => {
	return (
		<AppContainer>
			<BackgroundVideo src={video} autoPlay muted loop />
			<TodoList />
		</AppContainer>
	);
};

export default App;

const AppContainer = styled.div`
	position: relative;
`;

const BackgroundVideo = styled.video`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
`;
