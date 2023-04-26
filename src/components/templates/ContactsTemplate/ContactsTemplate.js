import { Component } from '../../../core/Component';

import './contactsTemplate.scss';

class ContactsTemplate extends Component {
  static get observedAttributes() {
    return ['class', 'items'];
  }

  render() {
    return `
         <div class="container">
            ${JSON.parse(this.props.items)
              .map(
                (item) => `
                     <div class="row p-2 ${this.props.class}">
                        <h4 class="fs-4">
                           ${item.title}
                        </h4>
                        <p class="fs-6">
                           ${item.tel}
                        </p>
                        <p class="fs-6 mb-0">
                           ${item.text} 
                        </p>
                        <p class="fs-6 ${this.props.class}">
                           ${item.description}
                        </p>
                     </div>
                 `,
              )
              .join(' ')}
         </div>
      `;
  }
}

customElements.define('contacts-template', ContactsTemplate);
