import { appPages } from '../../../constants/appPages';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { storageService } from '../../../services/StorageService';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { APP_ROUTES } from '../../../constants/appRoutes';

import '../../molecules/MenuItems';
import '../../molecules/MenuItems';
import '../../../core/Router/Link';
import '../../molecules/LogoLink';
import '../../molecules/SearchForm';
import '../../molecules/BtnGroup';
import './navigation.scss';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      productsCount: 0,
      user: null,
    };
  }

  setProductsCount = (count) => {
    this.setState((state) => {
      return {
        ...state,
        productsCount: count,
      };
    });
  };

  countProducts = (data) => {
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
  };

  onStorage = (evt) => {
    const count = this.countProducts(evt.detail.data);
    this.setProductsCount(count);
  };

  setUser(evt) {
    this.setState((state) => {
      return {
        ...state,
        user: evt.detail.user,
      };
    });
  }

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.authorizeUser, this.setUser);
    eventEmmiter.on(APP_EVENTS.storage, this.onStorage);
    const items = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
    const count = this.countProducts(items);
    this.setProductsCount(count);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.authorizeUser, this.setUser);
    eventEmmiter.off(APP_EVENTS.storage, this.onStorage);
  }

  render() {
    return `
         <nav class="navbar navbar-expand-lg header__navigation d-flex justify-content-around">
            <logo-link></logo-link>
            <menu-items 
               items='${JSON.stringify(appPages.slice(0, 5))}'>
            </menu-items>
            <div class="d-flex justify-content-center align-items-center">
               <search-form></search-form>
               <div class="nav-item btns">
                  <route-link to="${APP_ROUTES.cart}">
                     <a class="nav-link position-relative" href="#">
                        <img src="./assets/images/icons/cart.svg" alt="cart" width="24" height="24">
                        <span class="position-absolute text-light translate-middle badge rounded-pill cart-counter bg-success">
                           ${this.state.productsCount}
                        </span>
                     </a>
                  </route-link>
               </div>
               <btn-group></btn-group>
            </div>
         </nav>
      `;
  }
}

customElements.define('green-navigation', Navigation);