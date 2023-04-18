import { Component } from '../../../core/Component';
import { APP_ROUTES } from '../../../constants/appRoutes';
import '../../../core/Router/Link';
import './logoLink.scss';

class LogoLink extends Component {
  render() {
    return `
      <route-link to="${APP_ROUTES.home}">
         <a class="logo d-flex justify-content-center align-items-center" 
            href="#">  
            <div class="logo__icon p-1">
               <img src="./assets/images/icons/logo.svg" alt="logo">
            </div>
               <span class="logo__text text-success">
                  greenshop
               </span>
         </a>
      </route-link>
      `;
  }
}

customElements.define('logo-link', LogoLink);
