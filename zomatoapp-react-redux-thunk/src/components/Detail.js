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
    
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={data.restaurant.featured_image} alt=""/><br/>
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <b>Nama Menu:</b> <p className="title is-4"> {data.restaurant.name}</p>
                <b>Rating:</b> <span className="tag is-info">{data.restaurant.user_rating.votes}</span><br/>
                <b>alamat:</b> {data.restaurant.location.address}<br/>
                <b>kisaran harga untuk berdua:</b> Rp.{data.restaurant.average_cost_for_two}
              </div>
            </div>
            <footer className="card-footer">
              <button className="button is-danger"><Link to={{
                pathname: '/'}}>Back</Link></button>
            </footer>
          </div> 
        </div>
    )
  }
}

export default Detail;