
import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CardList from '../Components/card/CardList';
import Scroll from '../Components/scroll/Scroll';
import Search from '../Components/Search/search';
import { setSearchfield, requestRobots } from "../Redux/actions"

///////////MapFuntions START//////////////
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
    robots: state.requestRobots.robots
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots(dispatch))
  }
}   

///////////MapFuntions END/////////////
function App(props) {
  /* cambiamos los State a Hooks */
  // const [robots, setRobots] = useState([]);


  const { searchField, onSearchChange, robots, onRequestRobots, isPending } = props; //resivimos los props del campo de busqueda

  useEffect(() => {
     onRequestRobots() 
  }, []);

  const Filtro = robots?.filter(robot => {
    return robot?.name?.toLowerCase().includes(searchField.toLowerCase()); //verificamos el array si incluye el valor del campo
  });

    return isPending ? <h1>Cargando...</h1>

    : (
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
