import React from 'react'
import { connect } from 'react-redux'

const List = (props) =>{
  return(
    <ul>
      {props.listMenu.map( (menu,idx) => {
          return <li key={idx}>
          <p>{menu.restaurant.name}</p>
          </li>
      })}
      
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    listMenu : state.ListMenu
  }
}

export default connect(mapStateToProps,null)(List)