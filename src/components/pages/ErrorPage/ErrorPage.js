import { Component } from '../../../core/Component';

class ErrorPage extends Component {
  render() {
    return `
      <div class="container">
        <h1>Error-Page</h1>
      </div>
    `;
  }
}

customElements.define('error-page', ErrorPage);
