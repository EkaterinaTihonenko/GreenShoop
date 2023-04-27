import { Component } from '../../../core/Component';
import '../../molecules/CategoryItems';

class CatalogControls extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['categories', 'isactive', 'id'];
  }

  render() {
    return `
         <div class="collapse navbar-collapse d-flex p-3">
            <category-items 
               category='${this.props.categories}'
               '${this.props.isactive}'>
            </category-items>
         </div>
      `;
  }
}

customElements.define('catalog-controls', CatalogControls);
