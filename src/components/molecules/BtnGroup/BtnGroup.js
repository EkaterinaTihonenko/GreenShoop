import { appPages } from '../../../constants/appPages';
import { Component } from '../../../core/Component';
import { ADMIN } from '../../../constants/userRoles';
import { APP_ROUTES } from '../../../constants/appRoutes';
import './btnGroup.scss';

class BtnGroup extends Component {
  static get observedAttributes() {
    return ['user'];
  }

  getItems() {
    const user = JSON.parse(this.props.user);
    if (user) {
      if (user.email === ADMIN) {
        return appPages.filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn, APP_ROUTES.admin].every(
            (item) => item !== menuItem.href,
          );
        });
      } else {
        return appPages.filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn, APP_ROUTES.admin].every(
            (item) => item !== menuItem.href,
          );
        });
      }
    } else {
      return appPages.filter((menuItem) => {
        return [APP_ROUTES.signUp, APP_ROUTES.signOut, APP_ROUTES.admin].every(
          (item) => item !== menuItem.href,
        );
      });
    }
  }

  render() {
    return `
         <button type="button"
                 class=" btn-right btn border border-2 border-success bg-transperend text-light d-flex justify-content-center align-items-center">
               <div class="btn-right-icon"></div>
               <menu-items 
                  items='${JSON.stringify(this.getItems().slice(5, 9))}'>
               </menu-items>
         </button>
      `;
  }
}

customElements.define('btn-group', BtnGroup);
