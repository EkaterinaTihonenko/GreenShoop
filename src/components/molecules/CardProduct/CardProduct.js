import { APP_EVENTS } from '../../../constants/appEvents';
import { APP_ROUTES } from '../../../constants/appRoutes';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { storageService } from '../../../services/StorageService';
import './cardProduct.scss';

class CardProduct extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['prewiew', 'title', 'description', 'price', 'id', 'content', 'date'];
  }

  addToCart = (evt) => {
    if (evt.target.closest('.btn-to')) {
      if (storageService.getItem('user')) {
        const allItems = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
        storageService.setItem(APP_STORAGE_KEYS.cartData, [...allItems, this.props]);
      } else {
        eventEmmiter.emit(APP_EVENTS.changeRoute, { target: APP_ROUTES.signIn });
        window.scrollTo(0, { behavior: 'smooth' });
      }
    }
    if (evt.target.closest('.card-name')) {
      eventEmmiter.emit(APP_EVENTS.changeRoute, { target: `product/${this.props.id}` });
      window.scrollTo(0, { behavior: 'smooth' });
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.addToCart);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.addToCart);
  }

  render() {
    const { preview, title, description, price, id, date } = this.props;
    const classBlog = this.props.content ? this.props.content : '';

    return `
         <div class="card card-item" id="${id}" date="${date}">
            <img class="image-fit card-item-img card-img-top" src="${preview}" alt="image">
            <div class="card-body ${classBlog}">
               <h5 class="card-title fs-5 card-name fix-line-of-title">${title}
               </h5>
               <p class="card-text fix-line-of-description">${
                 description || '<h3 class="text-success">Описание не найдено</h3>'
               }</p>
               <div class='d-flex justify-content-between align-items-center border-top pt-2'>
                  <strong class="pricing-card-title mb-0">
                     ${new Intl.NumberFormat('ru-Ru', {
                       style: 'currency',
                       currency: 'BYN',
                     }).format(price)}
                  </strong>
                  <button class="btn btn-to btn-success">
                     Купить
                  </button>
               </div>
            </div>
         </div>
      `;
  }
}

customElements.define('card-product', CardProduct);
