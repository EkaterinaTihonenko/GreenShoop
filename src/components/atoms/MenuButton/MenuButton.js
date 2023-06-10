import { Component } from '../../../core/Component';
import './menuButton.scss';

class MenuButton extends Component {
  constructor() {
    super();
  }

  render() {
    return `
         <input id="menu__toggle" type="checkbox" />
         <label class="menu__btn" for="menu__toggle">
            <span></span>
         </label>

      `;
  }
}

customElements.define('menu-button', MenuButton);
