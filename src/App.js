import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: '',
      registerA: '',
      namesSevers: '',
      whois: '',
      hostName: ''
    };
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.setState({ domain: event.target.value });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Consulta de dados de dominio</h2>
          <input type="text" size="50" placeholder="digite o endereço"
            onKeyPress={this.handleKeyPress}/>
        </div>
        <p className="App-intro">
          <div>
            <h3>Domínio</h3>
            <p>{ this.state.domain }</p>
          </div>
          <div>
            <h3>Registro A</h3>
            <p>{ this.state.registerA.address }</p>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
