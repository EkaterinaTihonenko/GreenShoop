import { Component } from '../../../core/Component';
import '../../atoms/TextSpan';

import './headerTemplate.scss';

class HeaderTemplate extends Component {
  constructor() {
    super();
  }

  render() {
    return `
         <div class="container header-content">
            <div class="header-content__text">
               <text-span class="span-text">
                  Добро пожаловать в Green Shop
               </text-span>
               <h1 class="title">
                  Let&lsquo;s Make a
                  <br>
                  Better
                  <text-span class="span-green">
                     Planet
                  </text-span>
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
               <img class="img-right" src="../../assets/images/potted-plant5.png" alt="img potted plant" />
            </div>
         </div>
      `;
  }
}

customElements.define('header-template', HeaderTemplate);
