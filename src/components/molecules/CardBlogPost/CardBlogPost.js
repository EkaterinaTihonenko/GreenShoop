import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import './cardBlogPost.scss';

class CardBlogPost extends Component {
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
         <div class="section-card m-2 ${className}" id="${id}">
            <img class="image" src="${image}" alt="img">
            <div class="card-blog-text ${classBlog}">
               <h4 class="text-title">
                 ${title}
               </h4>
               <p class="text">${description}</p>
               <button type="button" class="btn btn-blog bg-success text-white">Подробнее</button>
            </div>
         </div>
      `;
  }
}

customElements.define('card-blog-post', CardBlogPost);
