import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Consulta de dados de dominio</h2>
          <input type="text" size="50" placeholder="digite o endereço"/>
        </div>
        <p className="App-intro">
          <div>
            <h3>Domínio</h3>
            <p></p>
          </div>
          <div>
            <h3>Registro A</h3>
            <p></p>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
