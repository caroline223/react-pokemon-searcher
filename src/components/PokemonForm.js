import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: '',
    hp: 0,
    sprites: {
      front: '',
      back: ''
    }
  }

  handleInputNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleInputHpChange = (event) => {
    this.setState({hp: event.target.value})
  }

  handleFrontURLImageChange = (event) => {
    this.setState({sprites: {...this.state.sprites}, front: event.target.value })
  }

  handleBackURLImageChange = (event) => {
    this.setState({sprites: {...this.state.sprites}, back: event.target.value })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit( this.state )
    event.target.reset()
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={() => {console.log("submitting form...")}}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" onChange={this.handleInputNameChange} placeholder="Name" name="name" />
            <Form.Input fluid label="hp" onChange={this.handleInputHpChange} placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" onChange={this.handleFrontURLImageChange} placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" onChange={this.handleBackURLImageChange} placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
