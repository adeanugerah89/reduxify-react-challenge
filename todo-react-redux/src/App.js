import React, { Component } from 'react';
import { Provider } from 'react-redux'

import Store from './store'
import { addTodo } from './actions/TodoAction'
import Todo from './components/Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentValue: ''
    }
  }
  
  handleinput(value){
    this.setState({
      currentValue: value
    })
  }

  render() {
    return(
      <Provider store={Store}>
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
                  <input onChange={(e) => this.handleinput(e.target.value)}></input>
                  <button onClick={() => Store.dispatch(addTodo(this.state.currentValue))}>Add</button>
                  <Todo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Provider>        
    )
  }
}

export default App;
