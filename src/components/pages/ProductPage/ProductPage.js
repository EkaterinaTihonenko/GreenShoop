import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';
import { Component } from '../../../core/Component';
import { databaseService } from '../../../services/DatabaseService';
import { storageService } from '../../../services/StorageService';
import '../../templates/ProductInfo';

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      contacts: [
        {
          href: '',
          text: 'Подберем кашпо для растения',
          src: 'elem-1-.png',
        },
        {
          href: '',
          text: 'Подберем растения для кашпо',
          src: 'elem-2-.png',
        },
        {
          href: '',
          text: 'Посадим растение в кашпо',
          src: 'elem-3-.png',
        },
      ],
    };
  }

  static get observedAttributes() {
    return ['id'];
  }

  getProduct() {
    databaseService.getDocument(FIRESTORE_KEYS.products, this.props.id).then((data) => {
      this.setState((state) => ({
        ...state,
        products: data,
      }));
    });
  }

  addToCart = (evt) => {
    if (evt.target.closest('.btn-to-cart')) {
      const allItems = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
      storageService.setItem(APP_STORAGE_KEYS.cartData, [...allItems, this.props]);
    }
  };

  componentDidMount() {
    this.getProduct();
    this.addEventListener('click', this.addToCart);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.addToCart);
  }

  render() {
    return `
         <div class="container mt-5">
           <div class="product-card">
           <div class="d-flex align-items-sm-center">
               <img class="product-card__img" style: width="400px"; src="${
                 this.state.products.preview
               }" alt="img">
               <div class="product-card__content">
                  <h3 class="fs-2">${this.state.products.title}</h3>
                  <div class="wrap">
                     <div class="price d-flex align-items-center">
                        <h5 class="fs-5 pe-2 m-0">Цена:</h5>
                        <p class="text fw-normal fs-5 m-0">${new Intl.NumberFormat('ru-Ru', {
                          style: 'currency',
                          currency: 'BYN',
                        }).format(this.state.products.price)}/шт</p>
                        </div>
                        <div class="price d-flex align-items-center pt-2">
                        <h5 class="fs-5 pe-2 m-0">Категория:</h5>
                        <p class="text fw-normal fs-5 m-0">${this.state.products.category}</p>
                        </div>
                     <div class="mt-4 d-flex">
                        <button class="btn btn-to-cart bg-success text-light">В корзину</button>
                     </div>
                     <div class="col-span mt-4">
                        <product-info></product-info>
                     </div>
                  </div>
               </div>
            </div>
            <div class="description">
               <div class="pt-3">
               <h3 class="fs-3">Описание:</h3>
               <p class="text fw-normal lh-sm fs-6 m-0">
                 ${this.state.products.description}
               </p>
            </div>
            <div class="info-section d-flex justify-content-center mt-5 mb-5">
            <green-shop-contacts
               contacts='${JSON.stringify(this.state.contacts)}'
               class="icons">
            </green-shop-contacts>
         </div>
            <h2 class="fs-2 text-center mt-3">Краткое описание выращивания</h2>
            <div class="pt-3">
               <h4 class="fs-4">Освещение и местоположение:</h4>
               <p class="text fw-normal lh-sm fs-6 m-0">
                 ${this.state.products.lightingLocation}
               </p>
            </div>
            <div class="pt-3">
               <h4 class="fs-4">Температурный режим:</h4>
               <p class="text fw-normal lh-sm fs-6 m-0">
               ${this.state.products.temperature}
               </p>
            </div>
            <div class="pt-3">
               <h4 class="fs-4">Влажность и полив:</h4>
               <p class="text fw-normal lh-sm fs-6 m-0">
               ${this.state.products.humidityWatering}
               </p>
            </div>
            <div class="pt-3">
               <h4 class="fs-4">Удобрения:</h4>
               <p class="text fw-normal lh-sm fs-6 m-0">
               ${this.state.products.fertilizers}
               </p>
            </div>
               </div>
            </div>
           </div>
      `;
  }
}

customElements.define('product-page', ProductPage);
