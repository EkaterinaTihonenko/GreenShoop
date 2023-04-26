import { Component } from '../../../../core/Component';

class InfoDelifery extends Component {
  render() {
    return `
    <div class="row">
    <h2>Доставляем товар физическим и юридическим лицам по Республике Беларусь!<h2>
    <h5>Стоимость доставки для физических лиц:</h5>
    <p class="fw-normal fs-6">При стоимости заказа до 35 рублей:</p>
    <ul class="fw-normal fs-6">
       <li>- Доставка до отделения Европочты - 4 рубля;</li>
       <li>- Доставка курьером по Гомелю - 8 рублей;</li>
       <li>- Доставка курьером по населенным пунктам РБ кроме Гомелья - 12 рублей.</li>
       <li>- Самовывоз - бесплатно по адресу г.Гомель, ул.Орловская 70. оф. 409.</li>
    </ul>
    <p class="fw-normal fs-6">При стоимости заказа от 35 рублей до 135 рублей:</p>
    <ul class="fw-normal fs-6">
       <li>- Доставка до отделения Европочты - бесплатно;</li>
       <li>- Доставка курьером по РБ - 8 рублей;</li>
       <li>- Доставка курьером по населенным пунктам РБ кроме Гомелья - 12 рублей.</li>
       <li>- Самовывоз - бесплатно по адресу г.Гомель, ул.Орловская 70. оф. 409.</li>
    </ul>
    <p class="fw-normal fs-6">При стоимости заказа от 135 рублей:</p>
    <ul class="fw-normal fs-6">
       <li>- Доставка до отделения Европочты - бесплатно;</li>
       <li>- Доставка курьером по РБ - бесплатно;</li>
       <li>- Самовывоз - бесплатно по адресу г.Гомель, ул.Орловская 70. оф. 409.</li>
    </ul>
    <h5>Стоимость доставки для юридических лиц:</h5>
    <p class="fw-normal fs-6">При стоимости заказа до 35 рублей:</p>
    <ul class="fw-normal fs-6">
       <li>- Доставка курьером по г. Гомелю - 8 рублей;</li>
       <li>- Доставка курьером по РБ - 12 рублей;</li>
       <li>- Самовывоз - бесплатно по адресу г.Гомель, ул.Орловская 70. оф. 409.</li>
    </ul>
    <p class="fw-normal fs-6">При стоимости заказа от 35 рублей до 135 рублей:</p>
    <ul class="fw-normal fs-6">
       <li>- Доставка курьером по РБ - 8 рублей;</li>
       <li>- Самовывоз - бесплатно по адресу г.Гомель, ул.Орловская 70. оф. 409.</li>
    </ul>
    <p class="fw-normal fs-6">При стоимости заказа от 135 рублей:</p>
    <ul class="fw-normal fs-6">
       <li>- Доставка курьером по РБ - бесплатно;</li>
       <li>- Самовывоз - бесплатно по адресу г.Гомель, ул.Орловская 70. оф. 409.</li>
    </ul>
    <p class="fw-bold fs-6 text-danger">Примечание. Комнатные декоративные растения на указанных выше условиях доставляются по г. Гомель и Гомельскому району. 
    Для уточнения стоимости доставки комнатных растений по Республике Беларусь свяжитесь с менеджером магазина.</p>
 </div>
      `;
  }
}

customElements.define('info-delivery', InfoDelifery);