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
import '../../organisms/sortByPriceForm';
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
      sortData: [],
    };
  }

  static get observedAttributes() {
    return ['products', 'posts', 'categories'];
  }

  sliceData(currentPage = 1) {
    const { limit } = this.state;
    const start = (currentPage - 1) * limit;
    const end = currentPage * limit;
    const data = this.state.products;
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
    window.scrollTo({ top: 530, behavior: 'smooth' });
  };

  onFilterProductsByCategory = async (evt) => {
    const { selectedCategory } = evt.detail;
    const products = await databaseService.getCollection(FIRESTORE_KEYS.products);
    this.setState((state) => {
      return {
        ...state,
        products: products.filter((item) => item.category === selectedCategory.id),
        currentPage: 1,
      };
    });
  };

  onSearch = async (evt) => {
    const { data } = evt.detail;
    const products = await databaseService.getCollection(FIRESTORE_KEYS.products);
    if (data) {
      this.setState((state) => {
        return {
          ...state,
          products: products.filter((item) => {
            return item.title.toLowerCase().includes(data.search.toLowerCase());
          }),
          currentPage: 1,
        };
      });
    }
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

  setBlogPosts(posts) {
    this.setState((state) => {
      return {
        ...state,
        posts,
      };
    });
  }

  getBlogPosts = async () => {
    try {
      const posts = await databaseService.getCollection(FIRESTORE_KEYS.posts);
      this.setBlogPosts(posts);
    } catch (error) {
      console.log(error);
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
    try {
      const data = await databaseService.getCollection(FIRESTORE_KEYS.categories);
      this.setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  sortByPrice = (sortOrder) => {
    this.setState((state) => {
      return {
        ...state,
        products: this.state.products.slice().sort((a, b) => {
          switch (sortOrder) {
            case '1':
              return b.price - a.price;
            case '2':
              return a.price - b.price;
            case '3':
              return new Date(b.date) - new Date(a.date);
          }
        }),
      };
    });
  };

  onChangeSortFilter = (evt) => {
    if (evt.target.closest('.form-sort')) {
      this.sortByPrice(evt.target.value);
    }
  };

  componentDidMount() {
    this.getProducts();
    this.getBlogPosts();
    this.getAllCategories();
    this.sliceData();
    eventEmmiter.on(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    eventEmmiter.on(APP_EVENTS.setCategory, this.onFilterProductsByCategory);
    eventEmmiter.on(APP_EVENTS.searchProducts, this.onSearch);
    this.addEventListener('change', this.onChangeSortFilter);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    eventEmmiter.off(APP_EVENTS.setCategory, this.onFilterProductsByCategory);
    eventEmmiter.off(APP_EVENTS.searchProducts, this.onSearch);
    this.removeEventListener('change', this.onChangeSortFilter);
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
                     <sort-by-price></sort-by-price>
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
