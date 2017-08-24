const initialState = {
  todos : []
}

const TodoReducer = (state=initialState, action) => {
  switch (action.type) {
    
    case 'ADD_TODO':
      return {...state, todos: state.todos.concat(action.payload.todo)}
      
    case 'REMOVE_TODO':
      const newTodoList = {...state, todos: state.todos.filter( (todo,idx) => {
        return idx !== action.payload.index
      })}
      return newTodoList
      
    default:
      return state
  }
}

export default TodoReducer