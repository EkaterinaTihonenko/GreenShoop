import { Component } from '../../../core/Component';

import '../../templates/HeaderTemplate';
import './HomePage.scss';

class HomePage extends Component {
  render() {
    return `
         <header-template></header-template>
      `;
  }
}

customElements.define('home-page', HomePage);
