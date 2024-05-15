import React from "react";
import styled from "styled-components";

const Modal = ({ children, closeModal, onClick }) => {
	return (
		<ModalOverlay>
			<ModalContent>
				<ModalText>{children}</ModalText>
				<ButtonContainer>
					<YesButton onClick={onClick}>Да</YesButton>
					<Button onClick={closeModal}>Нет</Button>
				</ButtonContainer>
			</ModalContent>
		</ModalOverlay>
	);
};

export default Modal;

const YesButton = styled.button`
  background-color: blue;
  width: 90px;
  border: none;
  border-radius: 5px;
`

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ModalContent = styled.div`
	background-color: white;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ModalText = styled.p`
	margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Button = styled.button`
	background-color: ${({ confirm }) => (confirm ? "green" : "red")};
	width: 90px;
	height: 25px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	color: white;
	transition: 0.3s;
	margin-left: 10px;
	&:active {
		background-color: gray;
	}
`;
