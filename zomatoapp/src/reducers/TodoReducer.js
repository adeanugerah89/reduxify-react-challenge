const initialState = {
  todos: []
}

const TodoReducer = (state=initialState, action) => {
  switch (action.type) {
    
    case 'ADD_TODO':
      const todo = action.payload.todo
      const newTodos = state.todos.concat(todo)
      console.log(newTodos);
      return {...state, todos: newTodos}
      
    case 'REMOVE_TODO':
      const newTodosWillupdate = state.todos
      newTodosWillupdate.splice(action.payload.index, 1)
      return {...state, todos: newTodosWillupdate}
    
    default:
      return state
  }
}

export default TodoReducer