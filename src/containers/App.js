
import {React, Component} from 'react';
import './App.css';
import Card_list from '../Components/card/CardList';
import Scroll from '../Components/scroll/Scroll';
import Search from '../Components/Search/search';

class App extends Component {
  constructor(){
    super()
    this.state = { //lo que puede cambiar y pasar a los componentes
      robots: [],
      searchfield: ''
    }
  }
  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')//hacemos el request del api
  .then(response => response.json())
  .then(users => this.setState({robots: users}))//asignamos a robots el objeto para crear los cards

  }

  onSearchChange = (event)=>{
    this.setState({searchfield: event.target.value})
  }

  render(){
    const Filtro = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); //verificamos el array si incluye el valor del campo
    })

    if(this.state.robots.length === 0){
      return <h1>Cargando...</h1>
    }else{
      return (
        <div className="App">
         <div className='header'> 
            <h1 className="f1" >CARD SEARCH</h1>
            <Search searchChange = {this.onSearchChange}/>
          </div>
          <Scroll>
            <Card_list robots = {Filtro}/>
          </Scroll>
          <p>Developer by: <a href='https://github.com/Gnova09'>Gnova09</a></p>
        </div>
       
      );
    }
  }  
}
export default App;
