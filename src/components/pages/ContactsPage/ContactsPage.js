import { Component } from '../../../core/Component';
import '../../templates/ContactsTemplate';
import '../../molecules/Map';

class ContactsPage extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          title: 'Прием заказов',
          tel: '<a class="contacts__link text-decoration-none text-success text-decoration-underline fw-bold" href="tel:+8801911717490">+88 01911 717 490</a>',
          text: 'График работы: Понедельник – Воскресенье с 09:00 до 21:00.',
          description:
            'Это бесплатные телефоны по которым вы можете продиктовать список товаров, и операторы примут вашу заявку.',
        },
        {
          title: 'Отдел консультаций',
          tel: '<a class="contacts__link text-decoration-none text-success text-decoration-underline fw-bold" href="tel:+8801911717500">+88 01911 717 500</a>',
          text: 'График работы: Понедельник – Воскресенье с 09:00 до 21:00.',
          description: '',
        },
        {
          title: 'Служба поддержки',
          tel: '<a class="contacts__link text-decoration-none text-success text-decoration-underline fw-bold" href="tel:+8801911717501">Служба поддержки</a>',
          text: 'Предназначена для приема жалоб и рекламаций. Пожалуйста, правильно оформляйте обращения, прикладывайте фото и указывайте номера заказов.',
          description:
            'Обязательно напишите нам, если у вас есть вопросы по качеству саженцев – наши специалисты помогут разрешить любую проблему.',
        },
        {
          title: 'Почта',
          tel: '<a class="contacts__link text-decoration-none text-success fw-bold" href="mailto:contact@griinshop.com">contact@griinshop.com</a>',
          text: 'Предназначена для обратной связи с покупателями. Напишите нам, если у вас есть вопросы по продукции, качеству<br>обслуживания, оплате или сроках доставки. Мы обязательно ответим вам в течение 48 часов.',
          description:
            ' ООО «GreenShoop» УНП – 391811175. Юридический адрес: 215965, Республика Беларусь, г. Гомель, ул. Орловская 70. оф. 409.',
        },
      ],
    };
  }

  render() {
    return `
            <div class="container">
               <div class="col pt-5">
                  <contacts-template
                     items='${JSON.stringify(this.state.contacts)}'
                     class="contacts">
                  </contacts-template>
               </div>
               <green-map><green-map>
            </div>
        `;
  }
}

customElements.define('contacts-page', ContactsPage);
