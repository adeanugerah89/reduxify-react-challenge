import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class List extends Component {
  constructor() {
    super()
    this.state = {
      listData: []
    }
  }

  render() {
    var data = this.state.listData
    return (
      <div className="container">
      {
        data.map((item,idx) => {
          return (
            <div className="columns" key={idx}>
              <div className="column is-half is-offset-one-quarter" id="listBugs">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                    nama Makanan: {item.restaurant.name}
                    </p>
                  </header>
                  <footer className="card-footer">
                    <button className="button is-info"><Link to={{
                      pathname: `/Detail/${item.restaurant.id}`,
                      state: {item: item}
                    }}>Detail</Link></button>
                  </footer>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    )
  }
  
}

export default List;