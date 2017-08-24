import React from 'react'
import { connect } from 'react-redux'

// import store from '../store'
import {deleteTodo} from '../actions/TodoAction'

const Todo = (props) =>{
  return(
    <ul>
      {props.todos.map( (todo,idx) => {
        return <li key={idx}>
          <p>{todo.name}</p>
          <button onClick={() => props.removeTodo(idx)}>Delete</button>
        </li>
      })}
    </ul>
  )
}

const mapStateToProps = (state) =>{
  return {
    todos: state.todos
  }
}
  
const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (index) => dispatch(deleteTodo(index))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo)