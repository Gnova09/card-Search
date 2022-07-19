
import {React, useEffect, useState} from 'react';
import './App.css';
import CardList from '../Components/card/CardList';
import Scroll from '../Components/scroll/Scroll';
import Search from '../Components/Search/search';

function App () {
 /*  constructor(){
    super()
    this.state = { //lo que puede cambiar y pasar a los componentes
      robots: [],
      searchfield: ''
    }
  } */

  /* cambiamos los State a Hooks */
  const [robots, setRobots] = useState([]);
  const [searchfield,setSearchfield] = useState("");

  /* componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')//hacemos el request del api
  .then(response => response.json())
  .then(users => this.setState({robots: users}))//asignamos a robots el objeto para crear los cards

  } */

    /* CAMBIAMO EL COMPONENTDIDMOUNT POR UN USEEFFECT() */

  useEffect( () => {
     fetch('https://jsonplaceholder.typicode.com/users')//hacemos el request del api
  .then(response => response.json())
  .then(users => setRobots(users))//asignamos a robots el objeto para crear los cards

  },[])
  
  const onSearchChange = (event)=>{
    /* this.setState({searchfield: event.target.value}) */
    setSearchfield(event.target.value)
  }

    const Filtro = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase()); //verificamos el array si incluye el valor del campo
    });

    if(robots.length === 0){
      return <h1>Cargando...</h1>
    }
    else{
      return (
        <div className="App">
         <div className='header'> 
            <h1 className="f1" >CARD SEARCH</h1>
            <Search searchChange = {onSearchChange}/>
          </div>
          <Scroll>
            <CardList robots = {Filtro}/>
          </Scroll>
          <p>Developer by: <a href='https://github.com/Gnova09'>Gnova09</a></p>
        </div>
       
      );
    }
}
export default App;
