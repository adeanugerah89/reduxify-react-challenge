import React, {Component} from 'react'

import store from '../store'
import {deleteTodo} from '../actions/TodoAction'

export default class Todo extends Component {

  render(){
    return(
      <ul>
        {store.getState().todos.map( (todo,idx) => {
          return <li key={idx}>
            <p>{todo.name}</p>
            <button onClick={() => store.dispatch(deleteTodo(idx))}>Delete</button>
          </li>
        })}
      </ul>
    )
  }
}

