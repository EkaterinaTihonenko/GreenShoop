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
    };
  }

  static get observedAttributes() {
    return ['posts'];
  }

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
    try {
      const posts = await databaseService.getCollection(FIRESTORE_KEYS.posts);
      this.setBlogPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.sliceData();
    this.getBlogPosts();
    eventEmmiter.on(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
  }

  render() {
    return `
         <div class="container">
            <h3 class="text-uppercase fw-bold text-decoration-underline text-success pt-5">Наш блог</h3>
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
      `;
  }
}

customElements.define('blog-page', BlogPage);
