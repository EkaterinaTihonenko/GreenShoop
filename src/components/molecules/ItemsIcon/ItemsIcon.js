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
                  <a href="${item.href}" 
                     class="${this.props.class}__link p-2 m-2 d-flex justify-content-center align-items-center rounded">
                     <img class="icon ${this.props.class}__img" 
                          src="../../../assets/images/icons/${item.src}" alt="img">
                  </a>
               `,
           )
           .join(' ')}
      `;
  }
}

customElements.define('items-icon', ItemsIcon);
