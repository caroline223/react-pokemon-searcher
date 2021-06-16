import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemonCards = () => {
    return this.props.pokemon.map(poke => {
      return <PokemonCard key={poke.id} pokemon={ poke } />
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>{this.renderPokemonCards()}</h1>
      </Card.Group>
    )
  }
}

export default PokemonCollection
