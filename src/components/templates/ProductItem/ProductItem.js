import { APP_EVENTS } from '../../../constants/appEvents';
import { APP_ROUTES } from '../../../constants/appRoutes';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { storageService } from '../../../services/StorageService';
import '../../molecules/Contacts';

class ProductItem extends Component {
  constructor() {
    super();
    this.state = {
      info: [
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
    return [
      'preview',
      'title',
      'description',
      'price',
      'id',
      'date',
      'location',
      'temperature',
      'watering',
      'fertilizers',
    ];
  }

  onClick = (evt) => {
    if (storageService.getItem('user')) {
      if (evt.target.closest('.btn-to')) {
        const allItems = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
        storageService.setItem(APP_STORAGE_KEYS.cartData, [...allItems, this.props]);
        const product = allItems.find((item) => item.id === this.props.id)
          ? allItems.find((item) => item.id === this.props.id)
          : false;
        this.setState((state) => {
          return {
            ...state,
            quantity: product.quantity ? product.quantity : 1,
          };
        });
      }
    } else {
      eventEmmiter.emit(APP_EVENTS.changeRoute, { target: APP_ROUTES.signIn });
      window.scrollTo(0, { behavior: 'smooth' });
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onClick);
  }

  render() {
    const { preview, title, description, price, id, location, temperature, watering, fertilizers } =
      this.props;

    return `
         <div class="container mt-5>
            <div class="product-card">
               <div class="d-flex align-items-sm-center">
                  <img class="product-card__img" style: width="400px"; 
                       src="${preview}" alt="img" />
                  <div class="product-card__content">
                     <h3 class="fs-2">
                        ${title}
                     </h3>
                     <div class="wrap">
                        <div class="price d-flex align-items-center">
                           <h5 class="fs-5 pe-2 m-0">
                              Цена:
                           </h5>
                           <p class="text fw-normal fs-5 m-0">
                              ${new Intl.NumberFormat('ru-Ru', {
                                style: 'currency',
                                currency: 'BYN',
                              }).format(price)}/шт
                           </p>
                        </div>
                        <div class="mt-4 d-flex">
                           <button class="${
                             this.state.idProduct
                           } btn btn-to bg-success text-light" data-id="${id}">
                             В корзину
                           </button>
                        </div>
                        <div class="col-span mt-4">
                           <product-info></product-info>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="description">
                  <div class="pt-3">
                     <h3 class="fs-3">
                        Описание:
                     </h3>
                     <p class="text fw-normal lh-sm fs-6 m-0">
                        ${description}
                     </p>
                  </div>
                  <div class="info-section d-flex justify-content-center mt-5 mb-5">
                     <green-shop-contacts 
                        contacts='${JSON.stringify(this.state.info)}' 
                        class="icons">
                     </green-shop-contacts>
                  </div>
                  <h2 class="fs-2 text-center mt-3">
                     Краткое описание выращивания
                  </h2>
                  <div class="pt-3">
                     <h4 class="fs-4">
                        Освещение и местоположение:
                     </h4>
                     <p class="text fw-normal lh-sm fs-6 m-0">
                        ${location}
                     </p>
                  </div>
                  <div class="pt-3">
                     <h4 class="fs-4">
                        Температурный режим:
                     </h4>
                     <p class="text fw-normal lh-sm fs-6 m-0">
                        ${temperature}
                     </p>
                  </div>
                  <div class="pt-3">
                     <h4 class="fs-4">
                        Влажность и полив:
                     </h4>
                     <p class="text fw-normal lh-sm fs-6 m-0">
                        ${watering}
                     </p>
                  </div>
                  <div class="pt-3">
                     <h4 class="fs-4">
                        Удобрения:
                     </h4>
                     <p class="text fw-normal lh-sm fs-6 m-0">
                        ${fertilizers}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      `;
  }
}

customElements.define('product-item', ProductItem);
