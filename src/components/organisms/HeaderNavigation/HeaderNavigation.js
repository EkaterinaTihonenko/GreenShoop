import { Component } from '../../../core/Component';
import { appPages } from '../../../constants/appPages';

import '../../moleculs/LogoLink';
import '../../moleculs/NavigationItem';
import '../../moleculs/NavigationBtn';

import './headerNavigation.scss';

class HeaderNavigation extends Component {
  render() {
    return `
         <div class="header__navigation">
            <logo-link></logo-link>
            <navigation-item
               items='${JSON.stringify(appPages)}'>
            </navigation-item>
            <navigation-btn
               class="header__navigation__btns">
            </navigation-btn>
         </div>
      `;
  }
}

customElements.define('header-navigation', HeaderNavigation);
