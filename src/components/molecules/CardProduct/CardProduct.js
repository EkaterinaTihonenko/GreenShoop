import { APP_EVENTS } from '../../../constants/appEvents';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { storageService } from '../../../services/StorageService';
import './cardProduct.scss';

class CardProduct extends Component {
  static get observedAttributes() {
    return ['image', 'title', 'description', 'price', 'id'];
  }

  addToCart = (evt) => {
    if (evt.target.closest('.btn')) {
      const allItems = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
      storageService.setItem(APP_STORAGE_KEYS.cartData, [...allItems, this.props]);
    }
    if (evt.target.closest('.card')) {
      eventEmmiter.emit(APP_EVENTS.changeRoute, { target: `catalog/${this.props.id}` });
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.addToCart);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.addToCart);
  }

  render() {
    const { image, title, description, price } = this.props;

    return `
         <div class="card">
            <img class="image-fit card-img-top" src="${image}" alt="image">
            <div class="card-body">
               <h5 class="card-title fix-line-of-title">${title}</h5>
               <p class="card-text fix-line-of-description">${description}</p>
               <div class='d-flex justify-content-between align-items-center border-top pt-2'>
                  <strong class="card-title pricing-card-title mb-0">
                     ${price} BYN
                  </strong>
                  <button class="btn btn-success">Купить</button>
               </div>
            </div>
         </div>
      `;
  }
}

customElements.define('card-product', CardProduct);
