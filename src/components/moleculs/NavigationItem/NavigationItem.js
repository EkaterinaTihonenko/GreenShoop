import { Component } from '../../../core/Component';
import '../../atoms/ItemLink';

import './navigationItem.scss';

class NavigationItem extends Component {
  static get observedAttributes() {
    return ['items'];
  }

  render() {
    const items = JSON.parse(this.props.items);

    return `
         <nav class="nav">
            ${items
              .map((item) => {
                return `
                     <item-link 
                        class="nav__link" 
                        href="${item.href}" 
                        content="${item.label}">
                     </item-link> 
                  `;
              })
              .join(' ')}
         </nav>
      `;
  }
}

customElements.define('navigation-item', NavigationItem);
