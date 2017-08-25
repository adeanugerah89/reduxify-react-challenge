import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const List = (props) =>{
  return(
    <div>

    <ul>
        {props.listMenu.map( (menu,idx) => {
            return <li key={idx}>
            <p>{menu.restaurant.name}</p>
            <button className="button is-info"><Link to={{
              pathname: `/Detail/${menu.restaurant.id}`,
              state: {item: menu}
            }}>Detail</Link></button>
            </li>
        })}
    </ul>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    listMenu : state.ListMenu
  }
}

export default connect(mapStateToProps,null)(List)