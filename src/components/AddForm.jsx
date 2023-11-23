import React, { useState } from "react";
import * as S from "./todosStyled";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
function AddForm() {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <S.StTodosContainer>
      <S.StForm onSubmit={onSubmitHandler}>
        <S.StTitle>My TodoList</S.StTitle>
        오늘 할 일:
        <S.StInput
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        ></S.StInput>
        <S.StBtn>추가하기</S.StBtn>
      </S.StForm>
    </S.StTodosContainer>
  );
}

export default AddForm;
