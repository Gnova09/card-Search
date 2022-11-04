

import { React, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CardList from '../Components/card/CardList';
import Scroll from '../Components/scroll/Scroll';
import Search from '../Components/Search/search';
import { setSearchfield } from "../Redux/actions"

function App(props) {


  /* cambiamos los State a Hooks */
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  /* CAMBIAMO EL COMPONENTDIDMOUNT POR UN USEEFFECT() */

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')//hacemos el request del api
      .then(response => response.json())
      .then(users => setRobots(users))//asignamos a robots el objeto para crear los cards

  }, [])


  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }
  const Filtro = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase()); //verificamos el array si incluye el valor del campo
  });

  if (robots.length === 0) {
    return <h1>Cargando...</h1>
  }
  else {
    return (
      <div className="App">
        <div className='header'>
          <h1 className="f1" >CARD SEARCH</h1>
          <Search searchChange={onSearchChange} />
        </div>
        <Scroll>
          <CardList robots={Filtro} />
        </Scroll>
        <p>Developer by: <a href='https://github.com/Gnova09'>Gnova09</a></p>
      </div>

    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
