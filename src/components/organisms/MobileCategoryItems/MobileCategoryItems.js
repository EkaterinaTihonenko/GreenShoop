import { Component } from '../../../core/Component';
import '../../organisms/Navigation';
import '../../molecules/MenuItems';
import '../../molecules/CategoryItems';
import './mobileCategoryItems.scss';

class MobileCategoryItems extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['categories'];
  }

  render() {
    const categories = this.props.categories;

    return `
         <div class="mobile-category-items">
            <input type="checkbox" id="faq-1" class="mobile-category-items__input">
            <h5 class="mobile-category-items__h1-m"><label class="mobile-category-items__h1-m__label" for="faq-1">Категории растений</label></h5>
            <div class="mobile-category-items__p">
               <div class="mobile-category-items__p__category-items">
               <category-items 
                  items='${categories}'>
               </category-items>
            </div>
            </div>
       </div>
      `;
  }
}

customElements.define('mobile-category-items', MobileCategoryItems);
