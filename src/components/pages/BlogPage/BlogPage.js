import { APP_EVENTS } from '../../../constants/appEvents';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { databaseService } from '../../../services/DatabaseService';
import '../../templates/BlogTemplate';
import './blogPage.scss';

class BlogPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      limit: 4,
      currentPage: 1,
      isLoading: false,
    };
  }

  static get observedAttributes() {
    return ['posts'];
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
    return this.state.posts.slice(start, end);
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

  onSearch = async (evt) => {
    const { data } = evt.detail;
    const posts = await databaseService.getCollection(FIRESTORE_KEYS.posts);
    if (data) {
      this.setState((state) => {
        return {
          ...state,
          posts: posts.filter((item) => {
            return item.title.toLowerCase().includes(data.search.toLowerCase());
          }),
          currentPage: 1,
        };
      });
    }
  };

  componentDidMount() {
    this.sliceData();
    this.getBlogPosts();
    eventEmmiter.on(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    eventEmmiter.on(APP_EVENTS.searchPosts, this.onSearch);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    eventEmmiter.off(APP_EVENTS.searchPosts, this.onSearch);
  }

  render() {
    return `
         <it-preloader is-loading="${this.state.isLoading}">
            <div class="container">
               <h3 class="text-uppercase fw-bold text-decoration-underline text-success pt-5">
                  Наш блог
               </h3>
               <div class="mt-5">
                  <blog-template
                     posts='${JSON.stringify(this.sliceData(this.state.currentPage))}'>
                  </blog-template>
               </div>
               <div class='mt-5'>
                  <it-pagination 
                     total="${this.state.posts.length}" 
                     limit="${this.state.limit}"
                     current="${this.state.currentPage}">
                  </it-pagination>
               </div>
            </div>
         </it-priloader>
      `;
  }
}

customElements.define('blog-page', BlogPage);
