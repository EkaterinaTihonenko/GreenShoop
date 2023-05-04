import { Component } from '../../../core/Component';

class FooterItem extends Component {
  constructor() {
    super();
  }

  render() {
    return `
         <div class="d-flex justify-content-evenly align-items-start">
            <div class="fs-6 col-4">
               <ul class="list-unstyled">
                  <li class="mb-2">
                     <p class="m-0">
                       Для заявок:
                     </p>
                     +8801911717490.
                  </li>
                  <li class="mb-2 mt-2">
                     <p class="m-0">
                        Прием звонков:
                     </p>
                     Пн. – Вс. с 09:00 до 21:00.
                     <br>
                     contact@griinshop.com
                  </li>
                  <li class="mb-2 mt-2">
                     ООО «GreenShoop» УНП – 391811175. 
                     <br>
                     Юридический адрес: 215965,
                     <br> 
                     Республика Беларусь, 
                     <br>
                     г. Гомель, ул. Орловская 70. оф. 409.
                  </li>
               </ul>
            </div>
            <div class="fs-6 col-5">
               <ul class="list-unstyled">
                  <li class="mb-2 mt-2">
                     УНП 190516148, ОАО «Приорбанк» , 
                     <br>
                     БИК PJCBBY2X р/с BY56PJCB30120232661030000933 
                     <br>
                     (Внимание!!! р/с предназначен только для оплаты заказов, 
                     <br>
                     совершенных в интернет-магазине)
                  </li>
                  <li class="mb-2 mt-2">
                     Зарегистрирован в торговом реестре<br> 
                     22.08.2022 администрацией 
                     <br>
                     Советского района, г. Минск.
                     <br>
                     Рег. номер: 424328
                  </li>
               </ul>
            </div>
         </div>
      `;
  }
}

customElements.define('footer-item', FooterItem);
