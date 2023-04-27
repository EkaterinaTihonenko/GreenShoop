import { Component } from '../../../core/Component';
import './productInfo.scss';
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
            courierTo: '',
            postOffice: '- Доставка до отделения Европочты - бесплатно;',
            address: '- Самовывоз - бесплатно по адресу г.Гомель, ул.Орловская 70. оф. 409.',
            onlineBanking: '',
            legalEntities: '',
            ePos: '',
            document: '',
            application: '',
          },
        },
        {
          title: 'Оплата:',
          src: 'icons/payment.svg',
          text: {
            office: '- В офисе компании: наличные; карточкой.',
            courier: '- Курьеру Белпочты, Европочты - наличные, карточкой.',
            courierTo: '',
            postOffice: '- В отделении Европочты, Белпочты - наличные, карточкой.',
            address: '',
            onlineBanking: '- Оплата через интернет-банк (произвольный платеж).',
            legalEntities: '- Безналичная оплата для юридических лиц.',
            ePos: '- Оплата через Е-POS.',
            document: '',
            application: '',
          },
        },
      ],
    };
  }

  render() {
    return `
            <items-info
               info='${JSON.stringify(this.state.info)}'
               class="footer-col d-flex align-items-start justify-content-between">
            </items-info>
                     
      `;
  }
}

customElements.define('product-info', ProductInfo);
