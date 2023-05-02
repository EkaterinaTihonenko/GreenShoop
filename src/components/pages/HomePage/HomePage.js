import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { databaseService } from '../../../services/DatabaseService';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';
import '../../molecules/Pagination';
import '../../organisms/Section';
import '../../organisms/CardList';
import '../../molecules/ReviewsUserSwiper';
import '../../templates/CatalogControls';
import '../../templates/HeaderTemplate';
import '../../organisms/Section/LatestProducts';
import '../../templates/SaleAside';
import './homePage.scss';
import { convertQuotes } from '../../../utils/convertQuotes';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      posts: [],
      categories: [],
      limit: 8,
      currentPage: 1,
      isLoading: false,
      filteredProducts: [],
      priceSortReduction: [],
      priceSortIncrease: [],
      sortData: [],
    };
  }

  static get observedAttributes() {
    return ['products', 'posts', 'categories'];
  }

  setIsLoading = (isLoading) => {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  };

  sliceData(currentPage = 1) {
    const { limit } = this.state;
    const start = (currentPage - 1) * limit;
    const end = currentPage * limit;
    const data = this.state.filteredProducts.length
      ? this.state.filteredProducts
      : this.state.products;
    return data
      .map((item) => ({
        ...item,
        description: convertQuotes(item.description),
      }))
      .slice(start, end);
  }

  onChangePaginationPage = (evt) => {
    this.setState((state) => {
      return {
        ...state,
        currentPage: Number(evt.detail.page),
      };
    });
    window.scrollTo({ top: 450, behavior: 'smooth' });
  };

  onFilterProductsByCategory = (evt) => {
    const { selectedCategory } = evt.detail;
    this.setState((state) => {
      return {
        ...state,
        filteredProducts: this.state.products.filter(
          (item) => item.category === selectedCategory.id,
        ),
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
  /*
  priceReduction = async () => {
    this.setIsLoading(true);
    try {
      const priceReductionData = await databaseService.getCollection(FIRESTORE_KEYS.products);
      this.sortReduction(priceReductionData);
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  sortReduction = (priceReductionData) => {
    this.setState((state) => {
      return {
        ...state,
        priceSortReduction: priceReductionData.sort(
          (item, priceReductionData) => Number(priceReductionData.price) - Number(item.price),
        ),
      };
    });
  };

  priceIncrease = async () => {
    this.setIsLoading(true);
    try {
      const priceIncreaseData = await databaseService.getCollection(FIRESTORE_KEYS.products);
      this.sortIncrease(priceIncreaseData);
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsLoading(false);
    }
  };
  sortIncrease = (priceIncreaseData) => {
    this.setState((state) => {
      return {
        ...state,
        priceSortIncrease: priceIncreaseData.sort(
          (item, priceIncreaseData) => Number(item.price) - Number(priceIncreaseData.price),
        ),
      };
    });
  };

  sortNewProducts = async () => {
    this.setIsLoading(true);
    try {
      const productsData = await databaseService.getCollection(FIRESTORE_KEYS.products);
      this.sortProducts(productsData);
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsLoading(false);
    }
  };
  */
  sortProducts = (productsData) => {
    this.setState((state) => {
      return {
        ...state,
        sortData: productsData.sort(
          (item, productsData) => new Date(productsData.date) - new Date(item.date),
        ),
      };
    });
  };
  /*
  onClick = (evt) => {
    if (evt.target.closest('.price-reduction')) {
      const { priceReduction } = evt.detail;
      this.setState((state) => {
        return {
          ...state,
          priceSortReduction: this.state.products.filter(
            (item) => item.price === priceReduction.price,
          ),
          currentPage: 1,
        };
      });
    }
    if (evt.target.closest('.price-increase')) {
      const { priceIncrease } = evt.detail;
      this.setState((state) => {
        return {
          ...state,
          priceSortIncrease: this.state.products.filter(
            (item) => item.price === priceIncrease.price,
          ),
          currentPage: 1,
        };
      });
    }
    if (evt.target.closest('.new-products')) {
      const { newProducts } = evt.detail;
      this.setState((state) => {
        return {
          ...state,
          sortData: this.state.products.filter((item) => item.price === newProducts.price),
          currentPage: 1,
        };
      });
    }
  };
*/
  setBlogPosts(posts) {
    this.setState((state) => {
      return {
        ...state,
        posts,
      };
    });
  }

  getBlogPosts = async () => {
    this.setIsLoading(true);
    try {
      const posts = await databaseService.getCollection(FIRESTORE_KEYS.posts);
      this.setBlogPosts(posts);
    } catch (error) {
      console.log(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  setCategories(categories) {
    this.setState((state) => {
      return {
        ...state,
        categories,
      };
    });
  }

  getAllCategories = async () => {
    this.setIsLoading(true);
    try {
      const data = await databaseService.getCollection(FIRESTORE_KEYS.categories);
      this.setCategories(data);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  componentDidMount() {
    this.getProducts();
    this.getBlogPosts();
    this.getAllCategories();
    this.sliceData();
    //this.priceReduction();
    //this.priceIncrease();
    //this.sortNewProducts();
    eventEmmiter.on(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    eventEmmiter.on(APP_EVENTS.setCategory, this.onFilterProductsByCategory);
    eventEmmiter.on(APP_EVENTS.searchProducts, this.onSearch);
    //this.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    eventEmmiter.off(APP_EVENTS.setCategory, this.onFilterProductsByCategory);
    eventEmmiter.off(APP_EVENTS.searchProducts, this.onSearch);
    //this.removeEventListener('click', this.onClick);
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
                        categories='${JSON.stringify(this.state.categories)}'>
                     </catalog-controls>
                     <sale-aside></sale-aside>
                  </div>
                  <div class="col-sm-9">
                     <div class="d-flex justify-content-end mb-1">
                        <select class="form-select bg-transparent border border-success shadow" name="category" aria-label="Default select example" style="width: 18rem;">
                           <option class="option price-reduction" value='1'>По убыванию цены</option>
                           <option class="option price-increase" value='2'>По возрастанию цены</option>
                           <option class="option new-products" value='3'>По новинкам</option>
                        </select>
                     </div>
                     <card-list 
                        products='${JSON.stringify(this.sliceData(this.state.currentPage))}'
                        class="col-sm-3 mb-3">
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
        <latest-products></latest-products>
        <section-blog
           posts='${JSON.stringify(this.state.posts.slice(0, 3))}'>
        </section-blog>
        <reviews-user></reviews-user>
        <section-reviews-user></section-reviews-user>
    `;
  }
}

customElements.define('home-page', HomePage);
