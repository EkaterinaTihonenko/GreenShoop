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
import './homePage.scss';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      posts: [],
      categories: [],
      limit: 8,
      currentPage: 1,
    };
  }

  static get observedAttributes() {
    return ['products', 'posts'];
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

  onFilterByCategory = (evt) => {
    const { selectedCategory } = evt.detail;
    this.setState((state) => {
      return {
        ...state,
        products: this.state.products.filter((item) => item.categories.id === selectedCategory.id),
        currentPage: 1,
      };
    });
    window.scrollTo(0, { behavior: 'smooth' });
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
  /*
  isCategory = (evt) => {
    const { selectedCategory } = evt.detail;
    this.setState((state) => {
      return {
        ...state,
        categories: selectedCategory.category,
      };
    });
  };
*/
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

  componentDidMount() {
    this.getProducts();
    this.sliceData();
    this.getBlogPosts();
    eventEmmiter.on(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    //eventEmmiter.on(APP_EVENTS.setCategory, this.onFilterByCategory);
    eventEmmiter.on(APP_EVENTS.searchProducts, this.onSearch);
    //eventEmmiter.on(APP_EVENTS.setCategoryProducts, this.isCategory);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    //eventEmmiter.off(APP_EVENTS.setCategory, this.onFilterByCategory);
    eventEmmiter.off(APP_EVENTS.searchProducts, this.onSearch);
    //eventEmmiter.off(APP_EVENTS.setCategoryProducts, this.isCategory);
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
        <section-blog
           posts='${JSON.stringify(this.state.posts.slice(0, 3))}'>
        </section-blog>
        <reviews-user></reviews-user>
        <section-reviews-user></section-reviews-user>
    `;
  }
}

customElements.define('home-page', HomePage);
