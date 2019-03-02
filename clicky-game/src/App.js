import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    score:0,
    highScore:0,
  };

  updateScore() {
    this.setState({ score: this.state.score + 1 });
  }  

  render() {
    return (
      <Wrapper>
    <Jumbotron />
    <Navbar
      score={this.state.score}
      highScore={this.state.highScore}
      />
     {this.state.characters.map(character => <CharacterCard name={character.name} />)}
     </Wrapper>
    );
  }
}

export default App;
