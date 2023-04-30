import { Component } from '../../../../core/Component';
import '../../../molecules/CardBlogPost';
import './sectionBlog.scss';

class SectionBlog extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['posts', 'class', 'id'];
  }

  render() {
    const posts = JSON.parse(this.props.posts);

    return `
         <section class="section-blog">
           <h3 class="title-h3 text-center">Наши записи в блоге</h3>
           <div class="d-flex justify-content-around">
           ${posts
             .map((item) => {
               return `
               <card-blog-post
               id='${item.id}'
               image='${item.preview}'
               title='${item.title}'
               description='${item.description}'
               class="${this.props.class}"
               content=""
               style="width: 30rem;">
               </card-blog-post>
               `;
             })
             .join(' ')}
           </div>
         </section>
      `;
  }
}

customElements.define('section-blog', SectionBlog);
