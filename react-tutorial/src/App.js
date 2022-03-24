import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    render () {
        const { characters } = this.state

        return (
          <div className='container'>
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <Form handleSubmit={this.handleSubmit} />
          </div>
        )

    }
    state = {
      characters: [],
    }
    removeCharacter = (index) => {
      const {characters} = this.state

      this.setState({
        characters: characters.filter((character, i) => {
          return i != index
        }),
      })
    }
    handleSubmit = (character) => {
      this.state({characters: [...this.state.characters, character]})
    }

}

export default App