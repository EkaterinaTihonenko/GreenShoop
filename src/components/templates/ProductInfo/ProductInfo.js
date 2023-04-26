import { Component } from '../../../core/Component';
import './productInfo.scss';
import '../../molecules/Contacts';
import '../../molecules/ItemsInfo';

class ProductInfo extends Component {
  constructor() {
    super();
    this.state = {
      info: [
        {
          title: 'Доставка от 135 BYN:',
          src: 'icons/car.svg',
          text: {
            office: '',
            courier: '- Доставка курьером по РБ - бесплатно;',
            postOffice: '- Доставка до отделения Европочты - бесплатно;',
            address: '- Самовывоз - бесплатно по адресу г.Гомель, ул.Орловская 70. оф. 409.',
            onlineBanking: '',
            legalEntities: '',
            ePos: '',
          },
        },
        {
          title: 'Оплата:',
          src: 'icons/payment.svg',
          text: {
            office: '- В офисе компании: наличные; карточкой.',
            courier: '- Курьеру Белпочты, Европочты - наличные, карточкой.',
            postOffice: '- В отделении Европочты, Белпочты - наличные, карточкой.',
            address: '',
            onlineBanking: '- Оплата через интернет-банк (произвольный платеж).',
            legalEntities: '- Безналичная оплата для юридических лиц.',
            ePos: '- Оплата через Е-POS.',
          },
        },
      ],
    };
  }

  render() {
    return `
         <div class="col-span__items d-flex">
            <items-info
               info='${JSON.stringify(this.state.info)}'>
            </items-info>
         </div>
                     
      `;
  }
}

customElements.define('product-info', ProductInfo);
