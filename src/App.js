import { Component } from './core/Component';
import { routes } from './constants/routes';

import './components/moleculs/NavigationItem';
import './components/pages/AdminPage';
import './components/pages/BlogPage';
import './components/pages/CartPage';
import './components/pages/ContactsPage';
import './components/pages/ErrorPage';
import './components/pages/HomePage';
import './components/pages/ProductPage';

class App extends Component {
  render() {
    const pathname = window.location.pathname;

    return `
      <div class="container">
         ${
           routes.find((route) => route.href === pathname)?.component ?? '<error-page></error-page>'
         }
      </div>
    `;
  }
}

customElements.define('it-app', App);
