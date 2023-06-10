import { Component } from '../../../core/Component';
import '../../molecules/LogoLink';
import '../../molecules/Contacts';
import '../../molecules/MenuItems';
import '../../templates/SocialNetwork';
import '../../templates/PaymentMethods';
import '../../templates/FooterItem';
import './footer.scss';
import '../../../core/Router/Link';
import '../../atoms/LinkItem';
import { APP_ROUTES } from '../../../constants/appRoutes';
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
               <div class="footer-content">
                  <footer-item></footer-item>
                     <ul class="p-0 ul-items">
                        <li class="mb-2">
                           <route-link to="${APP_ROUTES.home}">
                              <a class="text-dark text-decoration-none" href="#">${
                                appPages[0].label
                              }</a>
                           </route-link>
                        </li>
                        <li class="mb-2">
                           <route-link to="${APP_ROUTES.cart}">
                              <a class="text-dark text-decoration-none" href="#">${
                                appPages[1].label
                              }</a>
                           </route-link>
                        </li>
                        <li class="mb-2">
                           <route-link to="${APP_ROUTES.blog}">
                              <a class="text-dark text-decoration-none" href="#">${
                                appPages[2].label
                              }</a>
                           </route-link>
                        </li>
                        <li class="mb-2">
                           <route-link to="${APP_ROUTES.deliveryPayment}">
                              <a class="text-dark text-decoration-none" href="#">${
                                appPages[3].label
                              }</a>
                           </route-link>
                        </li>
                        <li class="mb-2">
                           <route-link to="${APP_ROUTES.contacts}">
                              <a class="text-dark text-decoration-none" href="#">${
                                appPages[4].label
                              }</a>
                           </route-link>
                        </li>
                        <li class="mb-2">
                           <route-link to="${APP_ROUTES.signIn}">
                              <a class="text-dark text-decoration-none" href="#">${
                                appPages[7].label
                              }</a>
                           </route-link>
                        </li>
                        <li class="mb-2">
                           <route-link to="${APP_ROUTES.signUp}">
                              <a class="text-dark text-decoration-none" href="#">${
                                appPages[6].label
                              }</a>
                           </route-link>
                        </li>
                     </ul>
                  <div class="links-rights ps-2">
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
