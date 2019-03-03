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
  
  //when you click on a card ... the fish is taken out of the array
    imageClick = event => {
      const currentCharacters = event.target.alt;
      const charactersAlreadyClicked =
        this.state.clickedCharacters.indexOf(currentCharacters) > -1;
  
  //if you click on a fish that has already been selected, the game is reset and cards reordered
      if (charactersAlreadyClicked) {
        this.setState({
          characters: this.state.characters.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCharacters: [],
          score: 0
        });
          alert("Sorry, you lost");
  
  //if you click on an available fish, your score is increased and cards reordered
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
  //if you get all 12 fish corrent you get a congrats message and the game resets        
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
  
  //the order of components to be rendered: navbar, jumbotron, friendcard, footer 
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
            />))}
      
      </Wrapper>
      </>
    );
  }
}
  export default App;
//   state = {
//     characters,
//     score: 0,
//     highScore: 0,
//     guessed: []
//   };

  
//   render() {
//     return (
//       <>
//       <Wrapper>
//         <div className="row">
//           <Jumbotron />
//         </div>

//         <Navbar score={this.state.score} highScore={this.state.highScore} />
//         <div className="row">
//           {this.state.characters.map(character => (
//             <CharacterCard
//               key={character.id}
//               id={character.id}
//               name={character.name}
//               image={character.image}
//               updateScore={this.updateScore}
//             />))}
//         </div>
//       </Wrapper>
//       </>
//     );
//   }
// }

// export default App;
