import { appPages } from '../../../constants/appPages';
import { Component } from '../../../core/Component';
import { ADMIN } from '../../../constants/userRoles';
import { APP_ROUTES } from '../../../constants/appRoutes';
import './btnGroup.scss';

class BtnGroup extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['user'];
  }

  getItems() {
    const user = JSON.parse(this.props.user);
    if (user) {
      if (user.email === ADMIN) {
        return appPages.slice(7, 9).filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn].every((item) => item !== menuItem.href);
        });
      } else {
        return appPages.slice(7, 9).filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn].every((item) => item !== menuItem.href);
        });
      }
    } else {
      return appPages.slice(7, 9).filter((menuItem) => {
        return [APP_ROUTES.signUp, APP_ROUTES.signOut].every((item) => item !== menuItem.href);
      });
    }
  }

  render() {
    return `
         <button type="button"
            class="btn-right btn border border-2 border-success bg-transperend d-flex justify-content-center align-items-center">
            <menu-items 
               items='${JSON.stringify(this.getItems())}'>
            </menu-items>
         </button>
      `;
  }
}

customElements.define('btn-group', BtnGroup);
