import { Component } from '../../../../core/Component';
import '../../../molecules/ItemsInfo';

class InfoOrder extends Component {
  constructor() {
    super();
    this.state = {
      info: [
        {
          title: 'Оформление и подтверждение заказа:',
          src: 'icons/leaves.svg',
          text: {
            office:
              '- После выбора товара свяжитесь с нашим менеджером для обсуждения цены и сроков поставки.',
            courier: '',
            courierTo: '',
            postOffice: '',
            address: '',
            onlineBanking: '',
            legalEntities: '',
            ePos: '',
            document: '',
            application: '',
          },
        },
        {
          title: 'Оплата:',
          src: 'icons/leaves.svg',
          text: {
            office:
              '- На момент подписания договора о поставке под заказ покупатель вносит 70% предоплаты от суммы заказа.',
            courier:
              '- На момент прихода товара на склад продавца, покупатель оплачивает оставшиеся 30%.',
            courierTo: '',
            postOffice: '',
            address: '',
            onlineBanking:
              '- Оплату можно произвести наличными в офисе компании либо через интернет-банкинг.',
            legalEntities: '',
            ePos: '',
            document: '',
            application: '',
          },
        },
        {
          title: 'Сроки поставки:',
          src: 'icons/leaves.svg',
          text: {
            office: '',
            courier:
              '- Срок поставки товара под индивидуальный заказ колеблется от 2х дней до 1 месяца в зависимости от выбранной товарной позиции.',
            courierTo: '',
            postOffice: '',
            address: '',
            onlineBanking: '',
            legalEntities: '',
            ePos: '',
            document: '',
            application: '',
          },
        },
      ],
    };
  }

  render() {
    return `
         <div class="row">
            <h3>Как заказать товар, отсутствующий на складе:</h3>
            <p class="fw-normal fs-6">У нас всегда есть на складе горшки и растения для быстрого озеленения.
               <br>
               Если понравившегося вам горшка или растения не будет в наличии, мы привезем его под заказ в кратчайшие сроки.
            </p>
            <p class="fw-normal fs-6">Процедура покупки товара под заказ проста и состоит из нескольких шагов:</p>
            <items-info
               info='${JSON.stringify(this.state.info)}'>
            </items-info>
         </div>
      `;
  }
}

customElements.define('info-order', InfoOrder);
