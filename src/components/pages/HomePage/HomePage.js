import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { CATEGORIES } from '../../../constants/categories';
import { databaseService } from '../../../services/DatabaseService';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';

import '../../molecules/Pagination';
import '../../organisms/Section';
import '../../organisms/CardList';
import '../../molecules/ReviewsUserSwiper';
import '../../templates/CatalogControls';
import '../../templates/HeaderTemplate';
import './homePage.scss';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      limit: 12,
      currentPage: 1,
    };
  }

  sliceData(currentPage = 1) {
    const { limit } = this.state;
    const start = (currentPage - 1) * limit;
    const end = currentPage * limit;
    return this.state.products.slice(start, end);
  }

  onChangePaginationPage = (evt) => {
    this.setState((state) => {
      return {
        ...state,
        currentPage: Number(evt.detail.page),
      };
    });
    window.scrollTo(0, { behavior: 'smooth' });
  };

  onFilterProductsByCategory = (evt) => {
    const { selectedCategory } = evt.detail;
    this.setState((state) => {
      return {
        ...state,
        products: this.state.products.filter((item) => item.category.id === selectedCategory.id),
        currentPage: 1,
      };
    });
  };

  onSearch = (evt) => {
    const { data } = evt.detail;
    this.setState((state) => {
      return {
        ...state,
        products: this.state.products.filter((item) => {
          return item.title.toLowerCase().includes(data.search.toLowerCase());
        }),
        currentPage: 1,
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
    try {
      const products = await databaseService.getCollection(FIRESTORE_KEYS.products);
      this.setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getProducts();
    this.sliceData();
    eventEmmiter.on(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    eventEmmiter.on(APP_EVENTS.setCategory, this.onFilterProductsByCategory);
    eventEmmiter.on(APP_EVENTS.searchProducts, this.onSearch);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    eventEmmiter.off(APP_EVENTS.setCategory, this.onFilterProductsByCategory);
    eventEmmiter.off(APP_EVENTS.searchProducts, this.onSearch);
  }

  render() {
    return `
         <header class="header">
           <header-template></header-template>
         </header>
         <main class="mb-5">
            <div class="container mt-5 pt-2 border-top">
               <div class="row">
                  <div class='col-sm-3 border-end catalog-controls'>
                     <catalog-controls 
                        categories='${JSON.stringify(CATEGORIES)}'>
                     </catalog-controls>
                     <div class="aside p-2">
                        <div class="container d-flex flex-column justify-content-center align-items-center">
                           <img class="img-sale" src="/assets/images/SuperSale.png" alt="sale">
                           <p class="content-text text-danger fw-bold"">
                              СКИДКА ДО 75%
                           </p>
                           <a href=" #">
                              <img class="content-img" src="../../assets/images/potted-plant02.png" alt="img">
                           </a>
                        </div>
                     </div>
                  </div>
                  <div class="col-sm-9">
                     <card-list 
                        products='${JSON.stringify(this.sliceData(this.state.currentPage))}'>
                     </card-list>
                     <div class='mt-5'>
                        <it-pagination 
                           total="${this.state.products.length}" 
                           limit="${this.state.limit}"
                           current="${this.state.currentPage}">
                        </it-pagination>
                     </div>
                  </div>
               </div>
            </div>
         </main>
        <section-blog></section-blog>
        <reviews-user></reviews-user>
        <section-reviews-user></section-reviews-user>
    `;
  }
}

customElements.define('home-page', HomePage);
