import { Component } from '../../../core/Component';

class BlogPage extends Component {
  render() {
    return `
      <div class="container">
        <h1>Blog-Page</h1>
      </div>
    `;
  }
}

customElements.define('blog-page', BlogPage);
