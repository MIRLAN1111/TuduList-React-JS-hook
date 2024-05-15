// import React, { useContext } from 'react';
// import styled from 'styled-components';
// import { TodoContext } from '../todoList/TodoList'; // Путь к TodoList

// const Header = () => {
//   const { tasks } = useContext(TodoContext);

//   // Вычисляем количество задач
//   const totalTasks = tasks.length;

//   // Вычисляем количество завершенных задач
//   const completedTasks = tasks.filter(task => task.completed).length;

//   return (
//     <SpisokStyled>
//       <h1>Список дел</h1>
//       <p>Всего задач: {totalTasks}</p>
//       <p>Завершенных задач: {completedTasks}</p>
//     </SpisokStyled>
//   );
// }

// export default Header;

// const SpisokStyled = styled.div`
//   text-align: center;
//   color: white;
// `;