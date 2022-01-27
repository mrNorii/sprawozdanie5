import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      Marka: {}
    }
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/modele/api/modeles/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          Marka: data
        })
      })
  }

  render() {
    return (
      <div>
        asd
      </div>
    )     
  }

}
//{this.state.Model.name}

export default App;
