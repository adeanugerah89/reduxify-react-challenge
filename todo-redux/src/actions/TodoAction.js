export const addTodo = (value) => ({
  type: 'ADD_TODO',
  payload: {
    todo: {name: value}
  }
})

export const deleteTodo = (idx) => ({
  type: 'REMOVE_TODO',
  payload: {
    index: idx
  }
})