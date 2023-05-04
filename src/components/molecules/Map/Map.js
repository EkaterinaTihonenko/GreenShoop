import { Component } from '../../../core/Component';

class ContactsPage extends Component {
  constructor() {
    super();
  }

  render() {
    return `
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38924.68419520002!2d30.936777048632806!3d52.42855260000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d469ab3293717d%3A0xb1f54b6cedb286d2!2z0JzQsNCz0LDQt9C40L0g0YbQstC10YLQvtCyIEQuRmxldXI!5e0!3m2!1sru!2sby!4v1682079499595!5m2!1sru!2sby"
            width="100%"
            height="450"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
         </iframe>
      `;
  }
}

customElements.define('green-map', ContactsPage);
