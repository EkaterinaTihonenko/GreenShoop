import { Component } from '../../../core/Component';
import { appPages } from '../../../constants/appPages';
import '../../molecules/LogoLink';
import './mobileNavigation.scss';
import { APP_ROUTES } from '../../../constants/appRoutes';
import { authService } from '../../../services/Auth';
import { storageService } from '../../../services/StorageService';
import { ADMIN } from '../../../constants/userRoles';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';

class MobileNavigation extends Component {
  constructor() {
    super();
    this.state = {
      productsCount: 0,
      user: null,
    };
  }

  static get observedAttributes() {
    return ['user'];
  }

  setUser(user) {
    this.setState((state) => {
      return {
        ...state,
        user,
      };
    });
  }

  async authorizeUser() {
    try {
      const user = await authService.authorizeUser();
      this.setUser(user);
    } catch (error) {
      console.error(error);
    }
  }

  onAuthorizeUser = ({ detail }) => {
    this.setUser(detail.user);
  };

  setProductsCount = (count) => {
    if (storageService.getItem('user')) {
      this.setState((state) => {
        return {
          ...state,
          productsCount: count,
        };
      });
    } else {
      this.setState((state) => {
        return {
          ...state,
          productsCount: 0,
        };
      });
    }
  };

  countProducts = (data) => {
    if (storageService.getItem('user')) {
      if (Array.isArray(data)) {
        return data
          .filter((item, index, arr) => {
            return arr.findIndex((indexItem) => indexItem.id === item.id) === index;
          })
          .map((item) => {
            return {
              ...item,
              quantity: item.quantity
                ? item.quantity
                : data.filter((filteredItem) => filteredItem.id === item.id).length,
            };
          })
          .reduce((acc, item) => acc + item.quantity, 0);
      }
    }
  };

  onStorage = (evt) => {
    const count = this.countProducts(evt.detail.data);
    this.setProductsCount(count);
  };

  getItems() {
    const user = JSON.parse(this.props.user);
    if (user) {
      if (user.email === ADMIN) {
        return appPages.slice(0, 6).filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn].every((item) => item !== menuItem.href);
        });
      } else {
        return appPages.slice(0, 6).filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn].every((item) => item !== menuItem.href);
        });
      }
    } else {
      return appPages.slice(0, 6).filter((menuItem) => {
        return [APP_ROUTES.signUp, APP_ROUTES.signOut, APP_ROUTES.admin].every(
          (item) => item !== menuItem.href,
        );
      });
    }
  }

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.storage, this.onStorage);
    const items = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
    const count = this.countProducts(items);
    this.setProductsCount(count);
    this.authorizeUser();
    eventEmmiter.on(APP_EVENTS.authorizeUser, this.onAuthorizeUser);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.storage, this.onStorage);
    eventEmmiter.off(APP_EVENTS.authorizeUser, this.onAuthorizeUser);
  }

  render() {
    return `
      <div class="mob-nav">
         <div class="mob-nav__items">
            <logo-link></logo-link>
         </div>
         <div class="d-flex justify-content-center align-items-center">
         <search-form></search-form>
         <div class="nav-item btns">
            <route-link to="${APP_ROUTES.cart}">
               <a class="nav-link position-relative" href="#">
                  <img src="../../../assets/images/icons/cart.svg" alt="cart" width="24" height="24">
                  <text-span class="position-absolute text-light translate-middle badge rounded-pill cart-counter bg-success">
                     ${this.state.productsCount}
                  </text-span>
               </a>
            </route-link>
         </div>
         <btn-group user='${JSON.stringify(this.state.user)}'></btn-group>
         <div class="hamburger-menu">
         <input id="menu__toggle" type="checkbox" />
         <label class="menu__btn" for="menu__toggle">
            <span></span>
         </label>
         <ul class="menu__box">
            <menu-items
               items='${JSON.stringify(appPages.slice(0, 6))}'
               class="menu-items">
            </menu-items>
         </ul>
      </div>
      </div>
         </div>
      `;
  }
}

customElements.define('mobile-navigation', MobileNavigation);
