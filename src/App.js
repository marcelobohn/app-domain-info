import React, { Component } from 'react';
import './App.css';
import RegisterA from './components/RegisterA';
import NamesServers from './components/NamesServers';
import Whois from './components/Whois';
import HostName from './components/HostName';

import { Row, Col } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: 'Nenhum',
      registerA: '',
      namesServers: '',
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
    this.setState({ registerA: '', namesServers: '', whois: '', hostName: '' });
    fetch(`https://api-domain-info.herokuapp.com/api/${domain}`)
      .then(respose => respose.json())
      .then(json => {
        this.setState({ registerA: json.registerA });
        this.setState({ namesServers: json.namesServers });
        this.setState({ whois: json.whois });
        this.setState({ hostName: json.hostName });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header form-group">
          <h2>Consulta de dados de dominio</h2>
          <input type="text" size="50" placeholder="digite o endereço ex: umbler.com"
            onKeyPress={this.handleKeyPress} class="form-control"/>
        </div>
        <div className="App-intro container">
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <div>
                <h3>Domínio consultado</h3>
                <p>{ this.state.domain }</p>
              </div>
              { this.state.registerA.address && <RegisterA address={ this.state.registerA.address }/> }
              { this.state.namesServers && <NamesServers names={ this.state.namesServers }/> }
              { this.state.whois && <Whois fields={ this.state.whois }/> }
              { this.state.hostName && <HostName name={ this.state.hostName }/> }
            </Col>
          </Row>
        </div>

      </div>
    );
  }
}

export default App;
