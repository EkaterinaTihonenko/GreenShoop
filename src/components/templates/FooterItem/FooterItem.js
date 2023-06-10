import { Component } from '../../../core/Component';
import './footerItem.scss';

class FooterItem extends Component {
  constructor() {
    super();
  }

  render() {
    return `
         <div class="item-footer">
               <ul class="list-unstyled">
                  <li>
                     <p class="m-0 text-dark">
                       Для заявок:
                     </p>
                     +8801911717490.
                  </li>
                  <li class="mb-2 mt-2">
                     <p class="m-0 text-dark">
                        Прием звонков:
                     </p>
                     Пн. – Вс. с 09:00 до 21:00.
                     <br>
                     contact@griinshop.com
                  </li>
                  <li class="mb-2 mt-2 text-dark">
                     ООО «GreenShoop» УНП – 391811175. 
                     <br>
                     Юридический адрес: 215965,
                     <br> 
                     Республика Беларусь, 
                     <br>
                     г. Гомель, ул. Орловская 70. оф. 409.
                  </li>
               </ul>
               <ul class="list-unstyled">
                  <li class="mb-2 text-dark">
                     УНП 190516148, ОАО «Приорбанк» , 
                     <br>
                     БИК PJCBBY2X р/с BY56PJCB30120232661030000933 
                     <br>
                     (Внимание!!! р/с предназначен только для оплаты заказов, 
                     <br>
                     совершенных в интернет-магазине)
                  </li>
                  <li class="mb-2 mt-2 text-dark">
                     Зарегистрирован в торговом реестре<br> 
                     22.08.2022 администрацией 
                     <br>
                     Советского района, г. Минск.
                     <br>
                     Рег. номер: 424328
                  </li>
               </ul>
         </div>
      `;
  }
}

customElements.define('footer-item', FooterItem);
