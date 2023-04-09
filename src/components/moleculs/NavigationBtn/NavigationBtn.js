import { Component } from '../../../core/Component';

import '../../atoms/InputData';
import '../../atoms/TypeButton';
import '../../atoms/TextPhrase';

import './NavigationBtn.scss';

class NavigationBtn extends Component {
  render() {
    return `
         <div
            class="search">
               <input-data
                  class="search__input" 
                  type="search" 
                  placeholder="Поиск...">
               <type-button 
                  type="button" 
                  class="search__btn">
                     Поиск
               </type-button>
         </div>
         <div 
            class="like">
         </div>
         <div 
            class="cart">
            <text-phrase 
               class="cart__counter">
                 0
            </text-phrase>
         </div>
         <type-button 
            class="right__btn"
            type="button">
               <text-phrase 
                  class="right__btn__icon">
               </text-phrase>
               Войти
         </type-button>
      `;
  }
}

customElements.define('navigation-btn', NavigationBtn);
