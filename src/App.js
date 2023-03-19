import { Component } from './core/Component';

class App extends Component {
  render() {
    return `
       <h1>HELLO</h1>
     `;
  }
}

customElements.define('it-app', App);
