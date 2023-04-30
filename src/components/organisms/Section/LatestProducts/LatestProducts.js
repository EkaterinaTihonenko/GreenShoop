import { FIRESTORE_KEYS } from '../../../../constants/firestoreKeys';
import { Component } from '../../../../core/Component';
import { databaseService } from '../../../../services/DatabaseService';
import '../../CardList';

class LatestProducts extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
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

  setProducts(products) {
    this.setState((state) => {
      return {
        ...state,
        products,
      };
    });
  }

  getProducts = async () => {
    this.setIsLoading(true);
    try {
      const products = await databaseService.getCollection(FIRESTORE_KEYS.products);
      this.setProducts(products);
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  sliceProduct() {
    const start = this.state.length - this.state.quantity;
    const end = this.state.length;
    return this.state.products.slice(start, end);
  }

  componentDidMount() {
    this.getProducts();
    this.sliceProduct();
  }

  render() {
    return `
        <div class="mt-5 mb-5">
            <h3 class="text-center pt-5">Последние поступления</h3>
            <card-list 
                products='${JSON.stringify(
                  this.sliceProduct(this.state.products).slice(0, 6).reverse(),
                )}'
                class="col-2">
            </card-list>
        </div>
         `;
  }
}

customElements.define('latest-products', LatestProducts);
