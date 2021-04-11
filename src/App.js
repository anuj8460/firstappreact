import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Components/card-list/card-list.components";
import { SearchBox } from "./Components/Search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          monsters: users,
          searchField: "",
        })
      );
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Search</h1>
        <SearchBox
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
          type="search"
          placeholder="search monster"
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
