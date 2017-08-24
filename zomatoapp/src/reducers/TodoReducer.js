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
      const newData =  {...state, todos: state.todos.filter((todo,idx) => {
        return idx !== action.payload.index
      })}
      return newData
    
    default:
      return state
  }
}

export default TodoReducer