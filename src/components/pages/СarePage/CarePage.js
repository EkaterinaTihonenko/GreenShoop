import { Component } from '../../../core/Component';

class CarePage extends Component {
  render() {
    return `
      <div class="container">
        <h1>Care-Page</h1>
      </div>
    `;
  }
}

customElements.define('care-page', CarePage);
