import { Component } from '../../../core/Component';

class ContactsPage extends Component {
  render() {
    return `
      <div class="container">
        <h1>Contacts-Page</h1>
      </div>
    `;
  }
}

customElements.define('contacts-page', ContactsPage);
