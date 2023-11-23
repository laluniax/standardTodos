// 액션 값
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// 초기 값
const initialState = {
  todos: [
    {
      id: "아이디",
      title: "제목1",
      contents: "내용1",
      isDone: "true",
    },
    {
      id: "아이디2",
      title: "제목2",
      contents: "내용2",
      isDone: "false",
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {};
    case SWITCH_TODO:
      return {};
    default:
      return state;
  }
};

export default todos;
