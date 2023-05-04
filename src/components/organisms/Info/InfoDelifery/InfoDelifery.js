import { Component } from '../../../../core/Component';
import '../../../molecules/ItemsInfo';

class InfoDelifery extends Component {
  constructor() {
    super();
    this.state = {
      info: [
        {
          title: 'При стоимости заказа до 35 рублей:',
          src: 'icons/leaves.svg',
          text: {
            office: '',
            courier: '- Доставка курьером по Гомелю - 8 рублей;',
            courierTo: '- Доставка курьером по населенным пунктам РБ кроме Гомелья - 12 рублей.',
            postOffice: '- Доставка до отделения Европочты - 4 рубля;',
            address: '- Самовывоз - бесплатно по адресу г.Гомель, ул.Орловская 70. оф. 409.',
            onlineBanking: '',
            legalEntities: '',
            ePos: '',
            document: '',
            application: '',
          },
        },
        {
          title: 'При стоимости заказа от 35 рублей до 135 рублей:',
          src: 'icons/leaves.svg',
          text: {
            office: '',
            courier: '- Доставка курьером по населенным пунктам РБ кроме Гомелья - 12 рублей.',
            courierTo: '- Доставка курьером по РБ - 8 рублей;',
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
          title: 'При стоимости заказа от 135 рублей:',
          src: 'icons/leaves.svg',
          text: {
            office: '',
            courier: '',
            courierTo: '- Доставка курьером по РБ - бесплатно;',
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
          title: 'При стоимости заказа до 35 рублей:',
          src: 'icons/leaves.svg',
          text: {
            office: '',
            courier: '- Доставка курьером по г. Гомелю - 8 рублей;',
            courierTo: '- Доставка курьером по РБ - 12 рублей;',
            postOffice: '',
            address: '- Самовывоз - бесплатно по адресу г.Гомель, ул.Орловская 70. оф. 409.',
            onlineBanking: '',
            legalEntities: '',
            ePos: '',
            document: '',
            application: '',
          },
        },
        {
          title: 'При стоимости заказа от 35 рублей до 135 рублей:',
          src: 'icons/leaves.svg',
          text: {
            office: '',
            courier: '',
            courierTo: '- Доставка курьером по РБ - 8 рублей;',
            postOffice: '',
            address: '- Самовывоз - бесплатно по адресу г.Гомель, ул.Орловская 70. оф. 409.',
            onlineBanking: '',
            legalEntities: '',
            ePos: '',
            document: '',
            application: '',
          },
        },
        {
          title: 'При стоимости заказа от 135 рублей:',
          src: 'icons/leaves.svg',
          text: {
            office: '',
            courier: '',
            courierTo: '- Доставка курьером по РБ - бесплатно;',
            postOffice: '',
            address: '- Самовывоз - бесплатно по адресу г.Гомель, ул.Орловская 70. оф. 409.',
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
            <h3>
               Доставляем товар физическим и юридическим лицам по Республике Беларусь!
            </h3>
            <h5>
               Стоимость доставки для физических лиц:
            </h5>
            <items-info
               info='${JSON.stringify(this.state.info.slice(0, 3))}'>
            </items-info>
            <h5>
               Стоимость доставки для юридических лиц:
            </h5>
            <items-info
               info='${JSON.stringify(this.state.info.slice(3, 6))}'>
            </items-info>
            <p class="fw-bold fs-6 text-danger">
               Примечание. Комнатные декоративные растения на указанных выше условиях доставляются по г. Гомель и Гомельскому району. 
               Для уточнения стоимости доставки комнатных растений по Республике Беларусь свяжитесь с менеджером магазина.
            </p>
         </div>
      `;
  }
}

customElements.define('info-delivery', InfoDelifery);
