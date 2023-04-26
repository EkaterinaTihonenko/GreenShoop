import { Component } from '../../../core/Component';
import '../../atoms/TextSpan';

class ItemsInfo extends Component {
  static get observedAttributes() {
    return ['class', 'info'];
  }

  render() {
    return `
         <div class="items 
            ${this.props.class}__item footer-col d-flex align-items-start justify-content-between">
            ${JSON.parse(this.props.info)
              .map((item) => {
                return `
            <div class="item">
               <img class="icon" src="../../../assets/images/${item.src}" alt="icon">
               <text-span class="text fs-6">${item.title}</text-span>
               <ul>
                  <li>${item.text.postOffice}</li>
                  <li>${item.text.courier}</li>
                  <li>${item.text.address}</li>
                  <li>${item.text.office}</li>
                  <li>${item.text.onlineBanking}</li>
                  <li>${item.text.legalEntities}</li>
                  <li>${item.text.postOffice}</li>
                  <li>${item.text.ePos}</li>
               </ul>
            </div>
            `;
              })
              .join(' ')}
         </div>
      `;
  }
}

customElements.define('items-info', ItemsInfo);
