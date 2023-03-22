import { Component } from '../../../core/Component';

class ProductPage extends Component {
  render() {
    return `
      <div class="container">
         <h1>Product-Page</h1>
      </div>
    `;
  }
}

customElements.define('product-page', ProductPage);
