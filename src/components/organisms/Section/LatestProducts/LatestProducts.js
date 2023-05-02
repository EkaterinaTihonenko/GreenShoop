import { FIRESTORE_KEYS } from '../../../../constants/firestoreKeys';
import { Component } from '../../../../core/Component';
import { databaseService } from '../../../../services/DatabaseService';
import '../../CardList';

class LatestProducts extends Component {
  constructor() {
    super();
    this.state = {
      sortData: [],
      isLoading: false,
    };
  }

  static get observedAttributes() {
    return ['products'];
  }

  setIsLoading = (isLoading) => {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  };

  getProducts = async () => {
    this.setIsLoading(true);
    try {
      const productsData = await databaseService.getCollection(FIRESTORE_KEYS.products);
      this.onSort(productsData);
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsLoading(false);
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
        <div class="mt-5 mb-5">
            <h3 class="text-center pt-5">Последние поступления</h3>
            <card-list 
               products='${JSON.stringify(this.state.sortData.slice(0, 6))}'
               class="col-2">
            </card-list>
        </div>
         `;
  }
}

customElements.define('latest-products', LatestProducts);
