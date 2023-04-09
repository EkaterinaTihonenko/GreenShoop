import { Component } from '../../../core/Component';

import '../../atoms/InputData';
import '../../atoms/TypeButton';

class FormSearch extends Component {
  render() {
    return `
         <form
            class="search">
               <input-data
                  class="search__input" 
                  type="search" 
                  name="search"
                  placeholder="Поиск...">
               <type-button 
                  type="submit" 
                  class="search__btn">
                     Поиск
               </type-button>
         </form>
     `;
  }
}

customElements.define('form-search', FormSearch);
