import { Component } from '../../../core/Component';
import '../../atoms/ItemLink';

import './navigation.scss';

class Navigation extends Component {
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

customElements.define('content-navigation', Navigation);
