import { Component } from '../../../core/Component';

class ContactsTemplate extends Component {
  constructor() {
    super();
  }

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
                     </div>
                 `,
              )
              .join(' ')}
         </div>
      `;
  }
}

customElements.define('contacts-template', ContactsTemplate);
