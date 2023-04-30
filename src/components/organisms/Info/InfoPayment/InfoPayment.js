import { Component } from '../../../../core/Component';
import '../../../molecules/ItemsInfo';

class InfoPayment extends Component {
  constructor() {
    super();
    this.state = {
      info: [
        {
          title: 'Возможные способы оплаты:',
          src: 'icons/leaves.svg',
          text: {
            office: '- В офисе компании: наличные; карточкой.',
            courier: '- Курьеру Белпочты, Европочты - наличные, карточкой;',
            courierTo: '',
            postOffice: '- В отделении Европочты, Белпочты - наличные, карточкой;',
            address: '',
            onlineBanking: '- Оплата через интернет-банк (произвольный платеж);',
            legalEntities: '- Безналичная оплата для юридических лиц;',
            ePos: '- Оплата через Е-POS;',
            document: '',
            application: '',
          },
        },
        {
          title:
            'Для проведения платежа через систему E-POS в ЕРИП необходимо выбрать последовательно пункты:',
          src: 'icons/leaves.svg',
          text: {
            office: '',
            courier: '',
            courierTo: '',
            postOffice: '- Система "Расчет" (ЕРИП);',
            address: '',
            onlineBanking: '- Сервис E-POS;',
            legalEntities: '',
            ePos: '- E-POS-оплата товара и услуг;',
            document: '',
            application: '',
          },
        },
        {
          title: '',
          src: 'icons/leaves.svg',
          text: {
            office: '',
            courier: '',
            courierTo: '',
            postOffice:
              '- Для оплаты ввести номер лицевого счета - он будет сообщен после оформления заказа посредством письма на электронную почту или sms-сообщения;',
            address: '- Совершить платеж;',
            onlineBanking: '- Проверить корректность информации;',
            legalEntities: '',
            ePos: '',
            document: '',
            application: '',
          },
        },
        {
          title: 'Для проведения платежа через систему E-POS при помощи QR-кода необходимо:',
          src: 'icons/leaves.svg',
          text: {
            office:
              '- Платежный сервис - оплата через интернет-эквайринг или мобильных операторов;',
            courier:
              '- Выбрать банковский или платежный сервис (откроется страница https://pay.raschet.by/):',
            courierTo: '- Банковский сервис - оплата через интернет-банкинг белорусских банков;',
            postOffice:
              '- Отсканировать QR-код мобильным телефоном. QR-код генерируется автоматически при переходе на ссылку оплаты через E-Pos;',
            address: '- Совершить платеж;',
            onlineBanking: '- Пройти авторизацию;',
            legalEntities: '- Проверить корректность информации;',
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
         <div class="wrap-payment">
            <h3>Оплата</h3>
            <p class="fs-6 fw-bold">Цены, указанные на сайте, являются окончательными и не требуют доплат при стандартных условиях поставки.
               <br> 
               Все налоги включены в стоимость товара.
               <br> 
               Для юридических лиц в документах выделяется НДС по ставке 20%.</p>
            <items-info
               info='${JSON.stringify(this.state.info.slice(0, 1))}'>
            </items-info>
            <p class="fw-normal fs-6">
               Оплату при помощи системы E-POS можно произвести в любом банке: интернет-банкинге, мобильном банкинге, инфокиоске, банкомате, кассе и т.д. 
               Совершить оплату можно с использованием наличных денежных средств, любых электронных денег, банковских платежных карточек.
            </p>
            <items-info
               info='${JSON.stringify(this.state.info.slice(1, 3))}'>
            </items-info>
            <p class="fw-normal fs-6">
               Техническое взаимодействие с системой "Расчет" (ЕРИП) осуществляется с помощью сервиса «Экспресс Платежи» (https://express-pay.by/).
            </p>
            <items-info
               info='${JSON.stringify(this.state.info.slice(3, 4))}'>
            </items-info>
         </div>
      `;
  }
}

customElements.define('info-payment', InfoPayment);
