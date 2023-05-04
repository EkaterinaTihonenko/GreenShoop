import { Component } from '../../../core/Component';

class ItemsInfo extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['class', 'info'];
  }

  render() {
    return `
         <div class="item ${this.props.class}">
            ${JSON.parse(this.props.info)
              .map((item) => {
                return `
            <div class="col">
               <div class="d-flex align-items-start">
                  <img class="icon me-2" 
                       src="../../../assets/images/${item.src}" alt="icon">
                  <p class="text fs-6">
                     ${item.title}
                  </p>
               </div>
               <ul class="fs-6 fw-normal">
                  <li>${item.text.postOffice}</li>
                  <li>${item.text.courier}</li>
                  <li>${item.text.courierTo}</li>
                  <li>${item.text.office}</li>
                  <li>${item.text.onlineBanking}</li>
                  <li>${item.text.legalEntities}</li>
                  <li>${item.text.ePos}</li>
                  <li>${item.text.document}</li>
                  <li>${item.text.address}</li>
                  <li>${item.text.application}</li>
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
