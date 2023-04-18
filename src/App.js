import { Component } from './core/Component';
import { routes } from './constants/routes';
import { authService } from './services/Auth';
import { APP_EVENTS } from './constants/appEvents';
import { eventEmmiter } from './core/EventEmmiter';
import './core/Router/Router';

import './components/organisms/Navigation';
import './components/pages/BlogPage';
import './components/pages/CartPage';
import './components/pages/HomePage';
import './components/pages/ContactsPage';
import './components/pages/ErrorPage';
import './components/pages/ProductPage';
import './components/pages/DeliveryAndPayment';
import './components/organisms/Footer';
import './components/pages/AdminPage';
import './components/pages/SignUpPage';
import './components/pages/SignInPage';
import './components/molecules/Preloader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }

  setIsLoading = (isLoading) => {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  };

  async authorizeUser() {
    this.setIsLoading(true);
    try {
      const user = await authService.authorizeUser();
      eventEmmiter.emit(APP_EVENTS.authorizeUser, { user });
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  }

  componentDidMount() {
    this.authorizeUser();
  }

  render() {
    return `
    <it-preloader is-loading="${this.state.isLoading}">
      <div class="main-layout content">
      <green-navigation></green-navigation>
        <main>
        <app-router>
            <app-route 
               path="${routes.home.href}" 
               title="Главная" 
               component="${routes.home.component}">
            </app-route>
            <app-route 
            path="${routes.cart.href}" 
            title="Карзина" 
            component="${routes.cart.component}">
           </app-route>
           <app-route 
           path="${routes.blog.href}" 
           title="Блог" 
           component="${routes.blog.component}">
           </app-route>
            <app-route 
               path="${routes.contacts.href}" 
               title="Контакты" 
               component="${routes.contacts.component}">
            </app-route>
            <app-route 
               path="${routes.deliveryPayment.href}" 
               title="Доставка & Оплата" 
               component="${routes.deliveryPayment.component}">
            </app-route>
            <app-route 
               path="${routes.product.href}" 
               title="Продукты" 
               component="${routes.product.component}">
            </app-route
               path="${routes.admin.href}" 
               title="Админ" 
               component="${routes.admin.component}">
            </app-route>
            <app-route 
               path="${routes.signUp.href}" 
               title="Регистрация" 
               component="${routes.signUp.component}">
            </app-route>
            <app-route 
               path="${routes.signIn.href}" 
               title="Вход" 
               component="${routes.signIn.component}">
            </app-route>
            <app-route 
               path="${routes.error.href}" 
               title="Ошибка" 
               component="${routes.error.component}">
            </app-route>
            <app-outlet></app-outlet>
        </app-router>
        </main>
        <green-shop-footer></green-shop-footer>
      </div>
      </it-preloader>
    `;
  }
}

customElements.define('it-app', App);
