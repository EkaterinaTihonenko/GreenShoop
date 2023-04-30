import { Component } from '../../../core/Component';
import { databaseService } from '../../../services/DatabaseService';
import './articleBlogPage.scss';
import '../../molecules/Preloader';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';

class ArticleBlogPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  static get observedAttributes() {
    return ['id'];
  }

  getPost() {
    databaseService.getDocument(FIRESTORE_KEYS.posts, this.props.id).then((data) => {
      this.setState((state) => ({
        ...state,
        posts: data,
      }));
    });
  }

  componentDidMount() {
    this.getPost();
  }

  render() {
    return `
      <div class="container">
            <div class="wrapp mt-5">
               <h2>${this.state.posts.title || 'Название не найдено'}</h2>
               <img class="image m-2 me-3 float-start" src="${this.state.posts.preview}" alt="img">
               <p class="mt-5">
                ${this.state.posts.description || 'Описание не найдено'}
               </p>
            </div>
            <div class="wrapp mt-5">
            <h2 class="text-center">${this.state.posts.titleTwo || 'Название не найдено'}</h2>
            <p class="mt-5">
             ${this.state.posts.text || 'Описание не найдено'}
            </p>
         </div>
      </div>
        `;
  }
}

customElements.define('article-blog-page', ArticleBlogPage);
