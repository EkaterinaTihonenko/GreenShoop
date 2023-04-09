import { Component } from '../../../core/Component';
import '../../templates/HeaderTemplate';

class HomePage extends Component {
  render() {
    return `
         <header-template></header-template>
      `;
  }
}

customElements.define('home-page', HomePage);
