import { Component } from '../../../core/Component';
import { appPages } from '../../../constants/appPages';

import '../../moleculs/LogoLink';
import '../../moleculs/Navigation';
import '../../moleculs/NavigationBtn';
import './headerTemplate.scss';

class HeaderTemplate extends Component {
  render() {
    return `
      <header class="header">
         <div class="header__navigation">
            
            <logo-link></logo-link>
            <content-navigation
               items='${JSON.stringify(appPages)}'>
            </content-navigation>
            <navigation-btn
               class="header__navigation__btns">
            </navigation-btn>

         </div>
         <div class="header-content">
            <div class="header-content-text">
               <span class="span-text">
                  Добро пожаловать в Green Shop
               </span>
               <h1 class="title">
                  Let&lsquo;s Make a
                  <br>
                  Better
                  <span class="span-green">
                     Planet
                  </span>
               </h1>
               <p>
                  Мы являемся интернет-магазином,
                  <br>
                  предлагающим широкий ассортимент растений.
                  <br>
                  Используйте наши растения для создания уникальных дизайнов интерьера.
                  <br>
                  Закажите свои любимые растения!
               </p>
            </div>
            <div class="header-content-img">
               <img class="img-right" src="../../assets/images/potted-plant5.png" alt="img potted plant">
            </div>
         </div>
      </header>
    `;
  }
}

customElements.define('header-template', HeaderTemplate);
