
import {Component} from'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.components';

class App extends Component {
    constructor() {
      super();
      this.state = {
        monsters: [],
        searchField: ''
      };
    }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(respons => respons.json())
      .then(users => this.setState({monsters:users}))
    }

    handleChange = (e) => {
      this.setState({searchField: e.target.value})
    }

    render() {
      const {monsters, searchField} = this.state;
      const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
        )
      return (
        <div className="App">
        <h1>Monsters Cards</h1>
        <SearchBox
          placeholder='search monster'
          handleChange = {this.handleChange}
        />
         <CardList monsters={filteredMonsters} />
        </div>
      );
    }
}



export default App;
