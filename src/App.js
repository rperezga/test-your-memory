import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Wrapper from "./components/Wrapper";
import Header from './components/Header/Header'
import Description from './components/Description/Description'
import Character from './components/Character/Character'
import Play from './components/Play/Play'
import character from "./character.json";

let characters = [];
let myCharacters = [];
let play = 0;

function starting() {  
  let tempCharac = {}
  characters = []
  myCharacters = []
  play = 0
  while (characters.length < 5) {
    var randomN = Math.floor(Math.random() * 13);
    if (characters.indexOf(randomN) < 0) {
      characters.push(randomN);

      tempCharac = {
        id: character[randomN].id,
        name: character[randomN].name,
        image: character[randomN].image
      }
      myCharacters.push(tempCharac);      
    }
  }
};

class App extends Component {

  state = {
    win: 0,
    lose: 0,
    myCharacters: myCharacters,
    showResults: true
  };

  constructor(props) {
    starting()
    super(props)
  }  

  flip = () => {
    this.setState({ showResults: false });
    play = Math.floor(Math.random() * 5);
    console.log('Play: ' + play)
  };

  clicked = (id) => {  
    if (myCharacters[play].id == id) {
      starting();
      this.setState({ win: this.state.win + 1, showResults: true, myCharacters: myCharacters })      
      alert('Congratulation. You win!!')      
    } else {
      starting();
      this.setState({ lose: this.state.lose + 1, showResults: true,  myCharacters: myCharacters })
      alert('Sorry you lose. Try again!')      
    }
  };


  render() {
    return (
      <div className="App">
        <Header win={this.state.win} lose={this.state.lose} />
        <Description parentMethod={this.flip} />

        <Wrapper >
          {this.state.showResults ?

            this.state.myCharacters.map(character => (
              <Character
                id={character.id}
                name={character.name}
                image={character.image}
              />
            ))
            :
            this.state.myCharacters.map(character => (
              <div onClick={() => { this.clicked(character.id) }}>
                <Character
                  id={character.id}
                  name="Guess"
                  image="assets/images/question.png"
                />
              </div>
            ))
          }
        </Wrapper>

        {this.state.showResults ? null : <Play name={myCharacters[play].name} image={myCharacters[play].image}/> }
      </div>
    );
  }
}

export default App;
