import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS
} from "./constant"

export const setSearchfield=(text)=>({
    type: CHANGE_SEARCH_FIELD ,
    payload: text
})

export const requestRobots = () => (dispatch)=>{
    dispatch({type: REQUEST_ROBOTS_PENDING});

    fetch('https://jsonplaceholder.typicode.com/users') //hacemos el request del api
  .then(response => response.json())
  .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
  .catch(err => dispatch({type: REQUEST_ROBOTS_FAILED, payload: err}))//asignamos a robots el objeto para crear los cards

}