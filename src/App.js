
import {React, Component} from 'react';
import './App.css';
import {robots} from "./card/robots";
import Card_list from './card/CardList';
import Search from './Search/search';

class App extends Component {
  constructor(){
    super()
    this.state = { //lo que puede cambiar y pasar a los componentes
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event)=>{
    this.setState({searchfield: event.target.value})
  }

  render(){
    const Filtro = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); //verificamos el array si incluye el valor del campo
    })

    return (
      <div className="App">
        <h1 className="f1" >CARD SEARCH</h1>
        <Search searchChange = {this.onSearchChange}/>
        <Card_list robots = {Filtro}/>
      </div>
    );
  }  
}
export default App;
