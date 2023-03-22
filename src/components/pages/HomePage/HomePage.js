import { Component } from '../../../core/Component';
import '../../templates/HomePageControls';
import '../../moleculs/Navigation';
import './homePage.scss';

class HomePage extends Component {
  render() {
    return `
      <div class="container">
         <home-controls">
            <div class="header-navigation">
               <a class="logo-link" href="./pages/index.html">
                  <div class="logo-icon"></div>
                  <span class="logo-text"> greenshop </span>
               </a>
            
               <navigation-page></navigation-page>
     
               <div class="header-btn-group">
                  <div class="btn-search">
                     <input type="search" aria-label="Search" class="input-search" placeholder="Поиск...">
                     <input type="button" value="Поиск" class="input-button-search">
                  </div>
                  <div class="btn-cart">
                     <span class="counter">0</span>
                  </div>
                  <button type="button" class="btn-right">
                     <span class="btn-right-icon"></span>
                     Войти
                  </button>
               </div>
            </div>
            <hr>
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
         </home-controls>
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);
