import { appPages } from '../../../constants/appPages';
import { Component } from '../../../core/Component';
import './btnGroup.scss';

class BtnGroup extends Component {
  render() {
    return `
         <button type="button"
                 class=" btn-right btn bg-transparent border-2 border border-success d-flex justify-content-center align-items-center">
               <div class="btn-right-icon"></div>
               <menu-items 
                  items='${JSON.stringify(appPages.slice(7, 8))}'>
               </menu-items>
         </button>
      `;
  }
}

customElements.define('btn-group', BtnGroup);
