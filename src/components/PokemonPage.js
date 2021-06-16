import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    renderedPokemon: [],
    searchInput: ""
  }

  componentDidMount(){
    //On mount, fetch initial information to the page
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(this.setInitialPokemon)
  }

  setInitialPokemon = (pokemonCollection) => {
    //upon initial render to the page, shows the entire pokemon collection
    this.setState({
      pokemon:[...pokemonCollection],
      renderedPokemon: [...pokemonCollection]
    })
  }



  handleFormSubmit = (event) => {

  }

  filterSearchByInput = (input) => {
    this.state.pokemon.filter(pokemon => pokemon.name.includes(input))
  }

  handleSearchInput = (event) => {
    //allows the browser to filter the pokemon search by query. If empty, will show all of the cards
    this.setState({
      searchInput: event.target.value
    })
       if(event.target.value === ""){
         this.setState({renderedPokemon: [...this.state.pokemon]})
       } else{
          this.setState({renderedPokemon: this.filterSearchByInput(event.target.value)})
       }
  }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleFormSubmit={this.handleFormSubmit}/>
        <br />
        <Search handleSearchInput={this.handleSearchInput}/>
        <br />
        <PokemonCollection pokemon={this.state.renderedPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
