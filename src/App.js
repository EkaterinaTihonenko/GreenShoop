import { Component } from './core/Component';
import { routes } from './constants/routes';
import './core/Router/Router';

import './components/organisms/Navigation';
import './components/pages/BlogPage';
import './components/pages/CartPage';
import './components/pages/HomePage';
import './components/pages/ContactsPage';
import './components/pages/ErrorPage';
import './components/pages/ProductPage';
import './components/pages/ArticleBlogPage';
import './components/pages/DeliveryAndPaymentPage';
import './components/organisms/Footer';
import './components/pages/AdminPage';
import './components/pages/SignUpPage';
import './components/pages/SignInPage';
import './components/pages/SignOutPage';
import './components/molecules/Preloader';
import { authService } from './services/Auth';
import { APP_EVENTS } from './constants/appEvents';
import { eventEmmiter } from './core/EventEmmiter';
import { storageService } from './services/StorageService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      user: null,
    };
  }

  setUser(user) {
    this.setState((state) => {
      return {
        ...state,
        user,
      };
    });
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
      this.setUser(user);
      storageService.setItem('user', user);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  }

  onAuthorizeUser = ({ detail }) => {
    this.setUser(detail.user);
  };

  componentDidMount() {
    this.authorizeUser();
    eventEmmiter.on(APP_EVENTS.authorizeUser, this.onAuthorizeUser);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.authorizeUser, this.onAuthorizeUser);
  }

  render() {
    return `
    <it-preloader is-loading="${this.state.isLoading}">
      <div class="main-layout content">
      <green-navigation user='${JSON.stringify(this.state.user)}'></green-navigation>
        <main>
        <app-router>
            <app-route 
               path="${routes.home.href}" 
               title="Главная" 
               component="${routes.home.component}">
            </app-route>
            <app-route 
               path="${routes.cart.href}" 
               title="Корзина" 
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
               title="Товар" 
               component="${routes.product.component}">
            </app-route>
            <app-route 
               path="${routes.article.href}" 
               title="Статья" 
               component="${routes.article.component}">
            </app-route>
            <app-route
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
               path="${routes.signOut.href}" 
               title="Выход" 
               component="${routes.signOut.component}">
            </app-route>
            <app-route 
               path="${routes.error.href}" 
               title="Ошибка" 
               component="${routes.error.component}">
            </app-route>
            <app-outlet></app-outlet>
        </app-router>
        </main>
        <green-footer></green-shop-footer>
      </div>
      </it-preloader>
    `;
  }
}

customElements.define('it-app', App);
