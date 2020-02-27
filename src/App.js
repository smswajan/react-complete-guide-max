import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import "./Person/Person.css";

class App extends Component {
  state = {
    persons: [
      { name: "George", age: 23 },
      { name: "Safa", age: 22 },
      { name: "Patel", age: 25 }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: "Sabereen", age: 22 },
        { name: "Swajan", age: 25 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Safa", age: 23 },
        { name: event.target.value, age: 22 },
        { name: "Swajan", age: 25 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      border: "1px solid blue",
      font: "inherit",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hello! Developers!</h1>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "Eita Button theke")}
        >
          Switch Names
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Eita paragraph theke")}
          changed={this.nameChangedHandler}
        >
          My Hobby: Coding
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
