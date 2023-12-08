import { Component } from '../../../../core/Component';
import '../../../molecules/CardBlogPost';
import '../section.scss';

class SectionBlog extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['posts', 'id'];
  }

  render() {
    const posts = JSON.parse(this.props.posts);

    return `
         <section class="section-blog mt-5">
            <h2 class="title-section text-center text-uppercase">
               Наши записи в блоге
            </h2>
            <div class="blogs d-flex justify-content-evenly mt-5">
             ${posts
               .map((item) => {
                 return `
                  <card-blog-post
                     id='${item.id}'
                     image='${item.preview}'
                     title='${item.title}'
                     description='${item.description}'
                     class="card-blog"
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
