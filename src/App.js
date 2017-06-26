import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterA from './components/RegisterA'

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
      this.grabDomain(event.target.value);
    }
  }

  grabDomain(domain) {
    this.setState({ domain: domain });
    this.setState({ registerA: '' });
    fetch(`https://api-domain-info.herokuapp.com/api/${domain}`)
      .then(respose => respose.json())
      .then(json => {
        this.setState({ registerA: json.registerA });
      });
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
        <div className="App-intro">
          <div>
            <h3>Domínio</h3>
            <p>{ this.state.domain }</p>
          </div>
          { this.state.registerA.address && <RegisterA address={ this.state.registerA.address }/>}
        </div>
      </div>
    );
  }
}

export default App;
