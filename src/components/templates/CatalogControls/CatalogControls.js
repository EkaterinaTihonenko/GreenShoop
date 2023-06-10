import { Component } from '../../../core/Component';
import '../../organisms/Navigation';
import '../../molecules/MenuItems';
import '../../molecules/CategoryItems';

class CatalogControls extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['categories'];
  }

  render() {
    const categories = this.props.categories;

    return `
         <header>
            <nav class="mt-3">
               <div class="pe-lg-4 ps-lg-4 pe-mb-2 ps-mb-2">
                  <div class="category-items">
                     <category-items 
                        items='${categories}'>
                     </category-items>
                  </div>
               </div>
            </nav>
         </header>
      `;
  }
}

customElements.define('catalog-controls', CatalogControls);
