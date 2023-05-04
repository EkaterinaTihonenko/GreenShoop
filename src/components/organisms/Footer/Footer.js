import { Component } from '../../../core/Component';
import '../../molecules/LogoLink';
import '../../molecules/Contacts';
import '../../molecules/MenuItems';
import '../../templates/SocialNetwork';
import '../../templates/PaymentMethods';
import '../../templates/FooterItem';
import './footer.scss';
import { appPages } from '../../../constants/appPages';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          href: 'https://yandex.by/maps/157/minsk/house/Zk4YcwRhSkQCQFtpfXVycXlhZw==/?ll=27.531316%2C53.930523&z=16',
          text: 'г.Гомель, ул.Орловская 70. оф. 409.',
          src: 'icons/location.svg',
        },
        {
          href: 'mailto:contact@griinshop.com',
          text: 'contact@griinshop.com',
          src: 'icons/message.svg',
        },
        {
          href: 'tel:+8801911717490',
          text: '+88 01911 717 490',
          src: 'icons/phone.svg',
        },
      ],
    };
  }

  render() {
    return `
         <div class="container">
            <footer class="footer">
               <div class="footer__contacts d-flex justify-content-around align-items-center mt-5 mb-5">
                  <logo-link></logo-link>
                  <green-shop-contacts
                     contacts='${JSON.stringify(this.state.contacts)}'
				         class="contacts">
                  </green-shop-contacts>
               </div>
               <div class="d-flex justify-content-between align-items-start">
                  <footer-item></footer-item>
                  <menu-items 
                     items='${JSON.stringify(appPages.slice(0, 5))}'
                     class="col-1">
                  </menu-items>
                  <div class="links-right ps-5">
                     <social-network></social-network>
                     <payment-methods></payment-methods>
                  </div>
               </div>
               <hr>
               <p class="text text-center fst-italic pb-3 text-copy">
                  &copy; 2023 GreenShop. Все права защищены.
               </p>
            </footer>
         </div>
      `;
  }
}

customElements.define('green-footer', Footer);
