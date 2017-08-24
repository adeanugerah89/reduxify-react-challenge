const initialState = {
  ListMenu : []
}

const ListMenuReducer = (state=initialState, action) => {
  switch (action.type) {
    
    case 'LIST_MENU':
      return {...state, ListMenu: state.ListMenu.concat(action.payload.menu)}
      
    default:
      return state
  }
}

export default ListMenuReducer