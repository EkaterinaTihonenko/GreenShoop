import { Component } from '../../../core/Component';

class ErrorPage extends Component {
  render() {
    return `
         <div class="container">
            <h1 class="text-center m-5">ErrorPage<h1>
         </div>
        `;
  }
}

customElements.define('error-page', ErrorPage);
