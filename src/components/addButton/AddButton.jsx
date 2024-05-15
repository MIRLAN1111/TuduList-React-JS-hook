import React from 'react'
import styled from 'styled-components';

 const AddButton = ({addTask}) => {
  return (
    <div>
            <ButtonStyled  onClick={addTask}>Add</ButtonStyled>

    </div>
  )
}

export default AddButton
const ButtonStyled = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background-color: #0022ffed;
  color: white;
  border: none;
  margin-top: 3px;
  cursor: pointer;
  transition: 0.5s;
  margin-top: 20px;
 &:active{
  background-color:black;
 }
`;

