import { PRODUCTS } from '../../../constants/products';
import { Component } from '../../../core/Component';

class ProductPage extends Component {
  static get observedAttributes() {
    return ['id'];
  }

  componentDidMount() {
    const product = PRODUCTS.find((item) => item.id === Number(this.props.id));
    console.log(product);
  }

  render() {
    return `
          <h1>ProductPage<h1>
        `;
  }
}

customElements.define('product-page', ProductPage);
