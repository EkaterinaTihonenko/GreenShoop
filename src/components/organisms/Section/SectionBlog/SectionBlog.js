import { Component } from '../../../../core/Component';
import '../../../molecules/CardBlogPost';
import '../section.scss';

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
         <section class="section-blog mt-5">
            <h3 class="title-section text-center text-uppercase">
               Наши записи в блоге
            </h3>
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
