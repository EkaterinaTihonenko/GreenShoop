import { Component } from '../../../core/Component';

import '../../organisms/HeaderNavigation';
import './headerContent.scss';

class HeaderContent extends Component {
  render() {
    return `
         <div class="header__content">
            <div class="header__column">
               <span class="header__span">
                  Добро пожаловать в Green Shop
               </span>
               <h1 class="header__title">
                  Let&lsquo;s Make a
                  <br>
                  Better
                  <span class="header__green">
                     Planet
                  </span>
               </h1>
               <p class="header__text">
                  Мы являемся интернет-магазином,
                  <br class="break">
                  предлагающим широкий ассортимент растений.
                  <br class="break">
                  Используйте наши растения для создания уникальных дизайнов интерьера.
                  <br class="break">
                  Закажите свои любимые растения!
               </p>
            </div>
            <div class="header__img">
               <img class="img-right" src="../../../assets/images/potted-plant5.png" alt="img potted plant">
            </div>
         </div>
    `;
  }
}

customElements.define('header-content', HeaderContent);
