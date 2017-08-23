import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import SearchFood from './components/SearchFood'
import Axios from 'axios'
import List from './components/List'
import Detail from './components/Detail'
import { BrowserRouter , Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      listData: []
    }
  }
  
  submitForm = () => {
    let search = document.getElementById('SearchFood').value
    Axios.get(`https://developers.zomato.com/api/v2.1/search?entity_type=city&q=${search}`,{headers: {"user-key": "11b48b6100f1b0189c26982d4349d6d6"}})
    .then(res => {
      localStorage.setItem('listData',JSON.stringify(res.data.restaurants))
      console.log('-----------------');
      this.setState({
        listData: res.data.restaurants
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  // getListData() {
  //   var list = localStorage.getItem('listData')
  //   if(list !== null) {
  //     JSON.parse(list).forEach(data => {
  //       this.state.listData.push(data)
  //     })
  //   } else {
  //     console.log('data kosong');
  //   }
  // }
  // 
  componentWillMount() {
    this.submitForm()
    console.log(this.state.listData, '===============');
  }
  
  componentDidUpdate(a,b){
    debugger
    console.log('----------------2');
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <h1><b>Welcome To ZooFoods</b></h1><br/>
            <div className="container">
            <div className="columns is-mobile">
               <div className="column is-half is-offset-one-quarter">
                <div className="field">
                  <div className="control">
                    <input id="SearchFood" className="input" type="text" placeholder="Search your foods" />
                    <button onClick={() => this.submitForm()} type="submit" className="button is-danger">SearchFood</button>
                  </div>
                </div>
               </div>
              </div>
            </div>
            <Route exact path="/" component={List}/>
            <Route exact path="/Detail/:id" component={Detail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
