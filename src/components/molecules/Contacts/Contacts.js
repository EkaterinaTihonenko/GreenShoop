import { Component } from '../../../core/Component';

class Contacts extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['class', 'contacts'];
  }

  render() {
    return `
         <address class="items  m-0
            ${this.props.class}__item footer-col d-flex align-items-center">
            ${JSON.parse(this.props.contacts)
              .map((contact) => {
                return `
                     <div class="d-flex align-items-center items__content me-5">
                        <div class="${this.props.class}__icon icon-address p-2 me-1">
                           <img class="icon ${this.props.class}__img" 
                                src="../../../assets/images/${contact.src}" alt="icon">
                        </div>
                        <a class="${this.props.class}__link text-decoration-none text-success fw-bold"
                           href="${contact.href}">
                           ${contact.text}
                        </a>
                     </div>
                  `;
              })
              .join(' ')}
         </address>
      `;
  }
}

customElements.define('green-shop-contacts', Contacts);
