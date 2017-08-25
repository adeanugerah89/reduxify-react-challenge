import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter , Route} from 'react-router-dom'

import Store from './store'
import { searchFood } from './actions/ListMenuAction'
import List from './components/List'
import Detail from './components/Detail'

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
        <BrowserRouter>
          <div>
            <div className="container">
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                      Zomato App
                      </p>
                    </header>
                    <input className="input" placeholder="search your food" onChange={(e) => this.handleinput(e.target.value)}></input>
                    <button className="button is-success" onClick={() => Store.dispatch(searchFood(this.state.currentValue))}>Search</button>
                  </div>
                  <Route exact path="/" component={ List }></Route>
                  <Route exact path="/Detail/:id" component={Detail} />
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
        
      </Provider>        
    )
  }
}

export default App;
