import axios from 'axios'

export const listMenu = (value) => ({
  type: 'LIST_MENU',
  payload: {
    menu: value
  }
})

export const searchFood = (search) => {
  return (dispatch) => {

    axios.get(`https://developers.zomato.com/api/v2.1/search?entity_type=city&q=${search}`,{headers: {"user-key": "11b48b6100f1b0189c26982d4349d6d6"}})
    .then(res=> {
      dispatch(listMenu(res.data.restaurants))
    })
    .catch(err => {
      console.log(err)
    })
  }
}
