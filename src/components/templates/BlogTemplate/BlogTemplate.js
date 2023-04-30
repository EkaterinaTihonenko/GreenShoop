import { Component } from '../../../core/Component';
import '../../molecules/CardBlogPost';

class BlogTemplate extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['posts', 'class', 'id'];
  }

  render() {
    const posts = JSON.parse(this.props.posts);

    return `
         <div class="container">
            ${posts
              .map((item) => {
                return `
                 <card-blog-post
                   id='${item.id}'
                   image='${item.preview}'
                   title='${item.title}'
                   description='${item.description}'
                   class="d-flex mt-3 ${this.props.class}"
                   content="ms-5 mt-1">
                 </card-blog-post>
                 `;
              })
              .join(' ')}
         </div>
      `;
  }
}

customElements.define('blog-template', BlogTemplate);
