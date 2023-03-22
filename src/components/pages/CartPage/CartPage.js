import { Component } from '../../../core/Component';

class CartPage extends Component {
  render() {
    return `
      <div class="container">
        <h1>Cart-Page</h1>
      </div>
    `;
  }
}

customElements.define('cart-page', CartPage);
