import { Component } from '../../../core/Component';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { storageService } from '../../../services/StorageService';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import './cartPage.scss';

class CartPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  setProducts = (products) => {
    const mapProducts = products
      .filter((item, index, arr) => {
        return arr.findIndex((findItem) => findItem.id === item.id) === index;
      })
      .map((item) => {
        return {
          ...item,
          quantity: item.quantity
            ? item.quantity
            : products.filter((filterItem) => filterItem.id === item.id).length,
        };
      });

    this.setState((state) => {
      return {
        ...state,
        products: mapProducts,
      };
    });
  };

  sum(products) {
    return products.reduce((acc, item) => {
      return (acc += item.quantity ? item.price * item.quantity : item.price);
    }, 0);
  }

  onCountItem = (evt) => {
    const id = evt.target.dataset.id;
    const items = this.state.products;
    if (evt.target.closest('.minus')) {
      const filteredItems = items
        .map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
        .filter((item) => Boolean(item.quantity));
      storageService.setItem(APP_STORAGE_KEYS.cartData, filteredItems);
    }
    if (evt.target.closest('.plus')) {
      const filteredItems = items
        .map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        })
        .filter((item) => Boolean(item.quantity));
      storageService.setItem(APP_STORAGE_KEYS.cartData, filteredItems);
    }
  };

  onStorage = (evt) => {
    this.setProducts(evt.detail.data);
  };

  componentDidMount() {
    const products = storageService.getItem(APP_STORAGE_KEYS.cartData);
    this.setProducts(products ?? []);
    this.addEventListener('click', this.onCountItem);
    eventEmmiter.on(APP_EVENTS.storage, this.onStorage);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onCountItem);
    eventEmmiter.off(APP_EVENTS.storage, this.onStorage);
  }

  render() {
    const nullProducts = Number(this.state.products.length) !== 0;

    return `
    <div class="container mt-5">
    <table class="table mt-3 align-items-center">
       <thead>
          <tr>
             <th scope="col">Ваш заказ</th>
             <th scope="col">Наименование</th>
             <th scope="col">Описание</th>
             <th scope="col"></th>
             <th scope="col" class="text-nowrap">Кол-во</th>
             <th scope="col"></th>
             <th scope="col">Цена за шт.</th>
             <th scope="col">Стоимость</th>
          </tr>
       </thead>
       <tbody>
       ${
         nullProducts
           ? `
        ${this.state.products
          .map((item) => {
            const sumPrice = item.price * item.quantity;
            return `
                <tr>
                   <td>
                        <img class="image-fit" src='${item.image}' alt="image" />
                   </td>
                   <td class="col-1 pe-4 fw-bold fs-6 text-success">${item.title}</td>
                   <td colspan="1" class="align-top pe-4 p-1 pt-5">
                      <span class="fix-description">${item.description}</span>
                   </td>
                   <td class="text-end pe-0">
                      <button class='btn btn-success minus' data-id="${item.id}">-</button>
                   </td>
                   <td class="text-center p-0">${item.quantity}</td>
                   <td class="text-start ps-0">
                      <button class='btn btn-success plus' data-id="${item.id}">+</button>
                   </td>
                   <td class="col-1 ps-3">${new Intl.NumberFormat('ru-Ru', {
                     style: 'currency',
                     currency: 'BYN',
                   }).format(item.price)}</td>
                   <td class="col-1">${new Intl.NumberFormat('ru-Ru', {
                     style: 'currency',
                     currency: 'BYN',
                   }).format(sumPrice)}</td>
                </tr>
                `;
          })
          .join(' ')}`
           : 'В корзине пусто! '
       }
       </tbody>
    </table>
    <tfooter class="d-flex justify-content-end p-4 pe-5 me-2 fw-bold fs-6">
           <tr>
             <td>Итого:</td>
             <td colspan="5">${new Intl.NumberFormat('ru-Ru', {
               style: 'currency',
               currency: 'BYN',
             }).format(this.sum(this.state.products))}</td>
           </tr>
        </tfooter>
 </div>
      `;
  }
}

customElements.define('cart-page', CartPage);
