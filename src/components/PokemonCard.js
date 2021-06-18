import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    side: 'front'
  }


  handleClick = () => {
    //toggle between the front and back of each card
    this.state.side === 'back' ? this.setState({side: 'front'}) : this.setState({side: 'back'})
  }
  
  render() {
    const { name, hp, sprites } = this.props.pokemon

    return (
      <Card>
        <div>
          <div onClick={ this.handleClick } className="image">
            <img src={this.state.side === 'back' ? sprites.back : sprites.front }alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{ name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              { hp } hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
