import { Component } from '../../../core/Component';

import '../../organisms/HeaderNavigation';
import '../../organisms/HeaderContent';
import './headerTemplate.scss';

class HeaderTemplate extends Component {
  render() {
    return `
      <header class="header">
         <header-navigation></header-navigation>
         <header-content></header-content>
      </header>
    `;
  }
}

customElements.define('header-template', HeaderTemplate);
