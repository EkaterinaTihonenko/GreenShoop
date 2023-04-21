import { Component } from '../../../core/Component';
import '../../molecules/Map';

class ContactsPage extends Component {
  render() {
    return `
            <div class="container">
               <div class="col pt-5">
                  <div class="row p-2">
                     <h5 class="fs-5">Прием заказов</h5>
                     <a class="contacts__link text-decoration-none text-success text-decoration-underline fw-bold" href="tel:+8801911717490">
                        +88 01911 717 490
                     </a>
                     <span class="fs-6">График работы: Понедельник – Воскресенье с 09:00 до 21:00. 
                        <br>
                        Это бесплатные телефоны по которым вы можете продиктовать список товаров, и операторы примут вашу заявку.
                     </span>
                  </div>
                  <div class="row p-2">
                     <h5 class="fs-5">Отдел консультаций</h5>
                     <a class="contacts__link text-decoration-none text-success text-decoration-underline fw-bold" href="tel:+8801911717500">
                        +88 01911 717 500
                     </a>
                     <span class="fs-6">
                        График работы: Понедельник – Воскресенье с 09:00 до 21:00. 
                     </span>
                  </div>
                  <div class="row p-2">
                     <h5 class="fs-5">Служба поддержки</h5>
                     <span class="fs-6"> 
                       <a class="contacts__link text-decoration-none text-success text-decoration-underline fw-bold" href="tel:+8801911717501">
                         Служба поддержки
                        </a> 
                         предназначена для приема жалоб и рекламаций. Пожалуйста, правильно оформляйте обращения, прикладывайте фото и указывайте номера заказов. 
                         <br>
                       Обязательно напишите нам, если у вас есть вопросы по качеству саженцев – наши специалисты помогут разрешить любую проблему.
                     </span>
                  </div>
                  <div class="row p-2">
                     <h5 class="fs-5">Почта</h5>
                     <a class="contacts__link text-decoration-none text-success fw-bold" href="mailto:contact@griinshop.com">
                        contact@griinshop.com
                     </a>
                     <span class="fs-6">Предназначена для обратной связи с покупателями. Напишите нам, если у вас есть вопросы по продукции, качеству
                       <br>
                        обслуживания, оплате или сроках доставки. Мы обязательно ответим вам в течение 48 часов.
                     </span>
                     <span class="fs-6">
                        ООО «GreenShoop» УНП – 391811175. Юридический адрес: 215965, Республика Беларусь, г. Гомель, ул. Орловская 70. оф. 409.
                     </span>
                  </div>
               </div>
               <green-map><green-map>
            </div>
        `;
  }
}

customElements.define('contacts-page', ContactsPage);
