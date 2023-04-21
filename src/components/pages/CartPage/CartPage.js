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

  onDeleteItem = (evt) => {
    if (evt.target.closest('.minus')) {
      const id = evt.target.dataset.id;
      const items = this.state.products;
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
  };

  onAddItem = (evt) => {
    if (evt.target.closest('.plus')) {
      const id = evt.target.dataset.id;
      const items = this.state.products;
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
    this.addEventListener('click', this.onDeleteItem);
    this.addEventListener('click', this.onAddItem);
    eventEmmiter.on(APP_EVENTS.storage, this.onStorage);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onDeleteItem);
    this.removeEventListener('click', this.onAddItem);
    eventEmmiter.off(APP_EVENTS.storage, this.onStorage);
  }

  render() {
    return `
    <div class="container mt-5">
    <table class="table mt-3 align-items-center">
       <thead>
          <tr>
             <th scope="col">Ваш заказ</th>
             <th scope="col">Наименование</th>
             <th scope="col">Описание</th>
             <th scope="col"></th>
             <th scope="col">Количество</th>
             <th scope="col"></th>
             <th scope="col">Цена за шт.</th>
             <th scope="col">Стоимость</th>
          </tr>
       </thead>
       <tbody>
        ${this.state.products
          .map((item) => {
            const sumPrice = item.price * item.quantity;
            return `
                <tr>
                   <td class="">
                        <img class="image-fit" src='${item.image}' alt="image" />
                   </td>
                   <td class="col-2">${item.title}</td>
                   <td colspan="1" class="fix-description pe-4 p-0">${item.description}</td>
                   <td class="text-end">
                      <button class='btn btn-success minus' data-id="${item.id}">-</button>
                   </td>
                   <td class=" text-center p-0">${item.quantity}</td>
                   <td class="text-start">
                      <button class='btn btn-success plus' data-id="${item.id}">+</button>
                   </td>
                   <td class="col-1 td-price">${item.price} BYN</td>
                   <td class="col-1 sum-price">${sumPrice} BYN</td>
                </tr>
                `;
          })
          .join(' ')}
       </tbody>
    </table>
    <div class="sum text-end p-4 pe-5 me-2""> Итого: ${this.state.sum}  BYN</div>
 </div>
      `;
  }
}

customElements.define('cart-page', CartPage);
