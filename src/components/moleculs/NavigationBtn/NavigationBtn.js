import { Component } from '../../../core/Component';

import '../../atoms/TypeButton';
import '../../atoms/TextPhrase';
import '../FormSearch';

import './NavigationBtn.scss';

class NavigationBtn extends Component {
  render() {
    return `
         <form-search></form-search>
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
