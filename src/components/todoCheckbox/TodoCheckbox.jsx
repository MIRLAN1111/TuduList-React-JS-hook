import React from 'react';
import styled from 'styled-components';

const TodoCheckbox = ({ type, checked, onChange }) => {
  return (
    <div>
      <CheckStyled  type={type} checked={checked} onChange={onChange}  />
    </div>
  );
};

export default TodoCheckbox;

const CheckStyled = styled.input`
  width: 16px;
  height: 20px;
  border-radius: 50%;
`;