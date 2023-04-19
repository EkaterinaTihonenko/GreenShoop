import { Component } from '../../../core/Component';
import '../../molecules/CategoryItems';

class CatalogControls extends Component {
  static get observedAttributes() {
    return ['categories'];
  }

  render() {
    const categories = this.props.categories;

    return `
         <div class="collapse navbar-collapse d-flex">
            <category-items items='${categories}'></category-items>
         </div>
      `;
  }
}

customElements.define('catalog-controls', CatalogControls);
