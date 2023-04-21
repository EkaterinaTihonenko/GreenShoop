import { Component } from '../../../core/Component';
import './errorPage.scss';

class ErrorPage extends Component {
  render() {
    return `
         <div class="container content text-center d-flex align-items-center">
            <h1 class=" content__title-error m-auto">Error Page<h1>
         </div>
        `;
  }
}

customElements.define('error-page', ErrorPage);
