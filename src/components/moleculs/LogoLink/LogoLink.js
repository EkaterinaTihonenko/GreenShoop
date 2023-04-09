import { Component } from '../../../core/Component';
import { APP_ROUTES } from '../../../constants/appRoutes';

import '../../atoms/IconFile';
import '../../atoms/TextPhrase';
import './logoLink.scss';

class LogoLink extends Component {
  render() {
    return `
         <a
            class="logo" 
            href="${APP_ROUTES.home}">  
               <icon-file class="logo__icon" src="./assets/images/icons/logo.svg" alt="logo">
               </icon-file>
               <text-phrase class="logo__text">
                  greenshop
               </text-phrase>
         </a>
      `;
  }
}

customElements.define('logo-link', LogoLink);
