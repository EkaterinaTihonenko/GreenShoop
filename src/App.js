import { Component } from './core/Component';
import './components/pages/СarePage';
import './components/pages/BlogPage';
import './components/pages/CartPage';
import './components/pages/ContactsPage';
import './components/pages/ErrorPage';
import './components/pages/HomePage';
import './components/pages/ProductPage';

import './main.scss';

class App extends Component {
  render() {
    return `
      <div class="container">
         <home-page>
         </home-page>
      </div>
    `;
  }
}

customElements.define('it-app', App);
