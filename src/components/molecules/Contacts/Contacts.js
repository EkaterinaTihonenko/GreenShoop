import { Component } from '../../../core/Component';
import './contacts.scss';

class Contacts extends Component {
  static get observedAttributes() {
    return ['class', 'contacts'];
  }

  render() {
    return `
         <div class="items 
         ${this.props.class}__item footer-col d-flex  align-items-center">
         ${JSON.parse(this.props.contacts)
           .map(
             (contact) => `
             <div class="d-flex align-items-center items__content me-5">
               <div class="${this.props.class}__icon icon-address p-2 me-1">
                  <img class="icon ${this.props.class}__img" src="../../../assets/images/icons/${contact.src}" alt="img">
               </div>
               <a class="${this.props.class}__link text-decoration-none text-success fw-bold"
                  href="${contact.href}">
                  ${contact.text}
               </a>
            </div>
           `,
           )
           .join(' ')}
         </div>
      `;
  }
}

customElements.define('green-shop-contacts', Contacts);
