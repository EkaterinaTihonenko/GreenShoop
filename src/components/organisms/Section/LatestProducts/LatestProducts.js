import { FIRESTORE_KEYS } from '../../../../constants/firestoreKeys';
import { Component } from '../../../../core/Component';
import { databaseService } from '../../../../services/DatabaseService';
import '../../CardList';
import './latestProducts.scss';

class LatestProducts extends Component {
  constructor() {
    super();
    this.state = {
      sortData: [],
    };
  }

  static get observedAttributes() {
    return ['products'];
  }

  getProducts = async () => {
    try {
      const productsData = await databaseService.getCollection(FIRESTORE_KEYS.products);
      this.onSort(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  onSort = (productsData) => {
    this.setState((state) => {
      return {
        ...state,
        sortData: productsData.sort(
          (item, productsData) => new Date(productsData.date) - new Date(item.date),
        ),
      };
    });
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return `
      <div class="wrapper p-3">
        <div class="mt-5 mb-5 wrapper__block">
            <h3 class="text-center pt-5 text-uppercase">
               Последние поступления
            </h3>
            <card-list 
               products='${JSON.stringify(this.state.sortData.slice(0, 6))}'
               class="col-2">
            </card-list>
        </div>
      </div>
         `;
  }
}

customElements.define('latest-products', LatestProducts);
