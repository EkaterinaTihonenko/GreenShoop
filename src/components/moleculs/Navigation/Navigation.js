import { Component } from '../../../core/Component';
import './navigation.scss';

class Navigation extends Component {
  render() {
    return `
         <nav class="nav">
            <a href="./pages/index.html" class="nav-link">главная</a>
            <a href="./pages/Product.html" class="nav-link">корзина</a>
            <a href="./pages/PlantCare.html" class="nav-link">уход</a>
            <a href="./pages/Blog.html" class="nav-link">блог</a>
            <a href="./pages/Contacts.html" class="nav-link">контакты</a>
         </nav>
    `;
  }
}

customElements.define('navigation-page', Navigation);
