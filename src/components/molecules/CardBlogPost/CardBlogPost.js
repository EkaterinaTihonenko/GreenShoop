import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import './cardBlogPost.scss';

class CardBlogPost extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['image', 'title', 'description', 'id', 'class', 'content'];
  }

  addToBlog = (evt) => {
    if (evt.target.closest('.btn-blog')) {
      eventEmmiter.emit(APP_EVENTS.changeRoute, { target: `article/${this.props.id}` });
    }
    window.scrollTo(0, { behavior: 'smooth' });
  };

  componentDidMount() {
    this.addEventListener('click', this.addToBlog);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.addToBlog);
  }

  render() {
    const { image, title, description, id } = this.props;
    const className = this.props.class ? this.props.class : '';
    const classBlog = this.props.content ? this.props.content : '';

    return `
         <div class="border-0 bg-transparent ${className}" id="${id}">
            <div class="im-wrapp">
               <img class="image col-4" src="${image}" alt="${title}" />
            </div>
            <div class="body-blog ${classBlog}">
               <h5 class="card-title p-0 lh-sm fix-title mt-3">${
                 title || '<h3 class="text-success">Название не найдено</h3>'
               }
               </h5>
               <p class="text fix-description">${
                 description || '<h3 class="text-success">Описание не найдено</h3>'
               }
               </p>
               <button type="button" class="btn btn-success btn-blog text-white">
                  Подробнее
               </button>
            </div>
         </div>
      `;
  }
}

customElements.define('card-blog-post', CardBlogPost);
