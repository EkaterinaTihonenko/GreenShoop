import '../../templates/ProductItem';
import '../../templates/ProductInfo';
import { Component } from '../../../core/Component';
import { databaseService } from '../../../services/DatabaseService';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      productsData: [],
      product: [],
      isLoading: false,
    };
  }

  static get observedAttributes() {
    return ['id'];
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
      this.setProducts(productsData);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  setProducts = (productsData) => {
    this.setState((state) => {
      return {
        ...state,
        product: productsData.find((item) => item.id === this.props.id),
        productsData,
      };
    });
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const { preview, title, description, price, id, location, temperature, watering, fertilizers } =
      this.state.product;

    return `
         <it-preloader is-loading="${this.state.isLoading}">
            <product-item
               preview='${preview}'
               title='${title}'
               price='${price}'
               description='${description}'
               id='${id}'
               location='${location}'
               temperature='${temperature}'
               watering='${watering}'
               fertilizers='${fertilizers}'>
            </product-item>
         </it-preloader>
      `;
  }
}

customElements.define('product-page', ProductPage);
