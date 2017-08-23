import React ,{Component} from 'react'
import { Link } from 'react-router-dom'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state= {
      item: props.location.state.item
    }
  }
  
  render() {
    let data = this.state.item
    return(
      <div className="column is-half is-offset-one-quarter">
        <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={data.restaurant.featured_image} alt=""/><br/>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            Nama Menu: <p className="title is-4"> {data.restaurant.name}</p>
            Rating: <span className="tag is-info">{data.restaurant.user_rating.votes}</span><br/>
            alamat: {data.restaurant.location.address}<br/>
            kisaran harga untuk berdua: Rp.{data.restaurant.average_cost_for_two}
          </div>
        </div>
        <footer className="card-footer">
        <button className="button is-info"><Link to={{
          pathname: '/'}}>Back</Link></button>
        </footer>
      </div>
    </div>
      
      
    )
  }
}

export default Detail;