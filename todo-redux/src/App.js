import React, { Component } from 'react';

import Todo from './components/Todo'
import store from './store'
import { addTodo } from './actions/TodoAction'

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentValue: '',
      todos: store.getState().todos
    }
    
    store.subscribe(() => {
      this.setState({
        todos: store.getState().todos
      })
    })
    
  }
  
  handleinput(value){
    this.setState({
      currentValue: value
    })
  }

  render() {
    return(
      <div>
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">
                  Todo App
                  </p>
                </header>
                <input onChange={ (e) => this.handleinput(e.target.value) }></input>
                <button onClick={ () => store.dispatch(addTodo(this.state.currentValue)) }>Add</button>
                <Todo/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;