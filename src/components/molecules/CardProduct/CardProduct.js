import { APP_EVENTS } from '../../../constants/appEvents';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { storageService } from '../../../services/StorageService';
import './cardProduct.scss';

class CardProduct extends Component {
  static get observedAttributes() {
    return ['image', 'title', 'description', 'category', 'price', 'id', 'content'];
  }

  addToCart = (evt) => {
    if (evt.target.closest('.btn')) {
      const allItems = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
      storageService.setItem(APP_STORAGE_KEYS.cartData, [...allItems, this.props]);
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
    const { image, title, description, category, price, id } = this.props;
    const classBlog = this.props.content ? this.props.content : '';

    return `
         <div class="card" id="${id}">
           <img class="image-fit card-img-top" src="${image}" alt="image">
           <div class="card-body ${classBlog}">
             <h5 class="card-title card-name fix-line-of-title">${title}</h5>
             <p class="card-text">${category}</p>
             <p class="card-text fix-line-of-description">${description}</p>
             <div class='d-flex justify-content-between align-items-center border-top pt-2'>
               <strong class="pricing-card-title mb-0">
               ${new Intl.NumberFormat('ru-Ru', {
                 style: 'currency',
                 currency: 'BYN',
               }).format(price)}
               </strong>
               <button class="btn bg-success text-light">Купить</button>
             </div>
           </div>
         </div>
      `;
  }
}

customElements.define('card-product', CardProduct);
