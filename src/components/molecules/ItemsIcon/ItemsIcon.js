import { Component } from '../../../core/Component';
import './itemsIcon.scss';

class ItemsIcon extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['class', 'items'];
  }

  render() {
    return `
         ${JSON.parse(this.props.items)
           .map(
             (item) => `
                  <nav class="nav ${this.props.class}">
                     <a href="${item.href}" 
                        class="${this.props.class}__link me-2 p-2 rounded  d-flex justify-content-center align-items-center">
                        <img class="icon ${this.props.class}__img" src="../../../assets/images/icons/${item.src}" alt="img">
                     </a>
                  </nav>
               `,
           )
           .join(' ')}
      `;
  }
}

customElements.define('items-icon', ItemsIcon);
