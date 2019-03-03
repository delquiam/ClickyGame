import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters,
    clickedCharacters: [],
    score: 0
  };
  //when you click on a card , the character is taken out of the array
  imageClick = event => {
    const currentCharacters = event.target.alt;
    const charactersAlreadyClicked =
      this.state.clickedCharacters.indexOf(currentCharacters) > -1;

    //if you click on a character that has already been selected, the game is reset and cards reshuffled
    if (charactersAlreadyClicked) {
      this.setState({
        characters: this.state.characters.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCharacters: [],
        score: 0
      });
      alert("Sorry, you lost");
      //if you click on an available character, your score is increased and cards reshuffled
    } else {
      this.setState(
        {
          characters: this.state.characters.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCharacters: this.state.clickedCharacters.concat(
            currentCharacters
          ),
          score: this.state.score + 1
        },
        //if you get all 12 characters correct you get an alert and the game resets
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              characters: this.state.characters.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCharacters: [],
              score: 0
            });
          }
        }
      );
    }
  };
  render() {
    return (
      <>
        <Wrapper>
          <Jumbotron />
          <Navbar score={this.state.score} />
          {this.state.characters.map(character => (
            <CharacterCard
              imageClick={this.imageClick}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </Wrapper>
      </>
    );
  }
}
export default App;
