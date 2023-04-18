import { Component } from '../../../core/Component';

import './headerTemplate.scss';

class HeaderTemplate extends Component {
  render() {
    return `
         <div class="container header-content d-flex justify-content-between align-items-center">
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
               <p class="text">
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
      `;
  }
}

customElements.define('header-template', HeaderTemplate);
