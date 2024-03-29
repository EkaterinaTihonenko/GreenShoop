import { Component } from '../../../core/Component';
import '../../molecules/ItemsIcon';
import './paymentMetods.scss';

class PaymentMethods extends Component {
  constructor() {
    super();
    this.state = {
      paymen: [
        {
          href: '#',
          src: 'pay-pal.svg',
        },
        {
          href: '#',
          src: 'visa.svg',
        },
        {
          href: '#',
          src: 'mastercard.svg',
        },
        {
          href: '#',
          src: 'mir.svg',
        },
        {
          href: '#',
          src: 'belkart.svg',
        },
      ],
    };
  }

  render() {
    return `
         <div class="link-right p-3">
            <items-icon 
               items='${JSON.stringify(this.state.paymen)}'
               class="d-flex payment-method">
            </items-icon>
         </div>
      `;
  }
}

customElements.define('payment-methods', PaymentMethods);
